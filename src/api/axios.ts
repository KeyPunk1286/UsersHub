import axios from 'axios'
import { ApiError } from '@/errors/ApiError'
import { emitUnauthorized } from '@/events/auth.events'
import type { ILoginResponse } from '@/types/authInterface'
import { tokenService } from '@/services/token.service'

export const refreshApi = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 10000,
})

export const api = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 10000,
})

interface FailedRequest {
  resolve: (token: string) => void
  reject: (error: Error) => void
}

let isRefreshing = false

const failedQueue: FailedRequest[] = []

function processQueue(error: Error | null, token?: string) {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error)
    } else {
      resolve(token!)
    }
  })

  failedQueue.length = 0
}

api.interceptors.request.use((config) => {
  const token = tokenService.getAccessToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (!axios.isAxiosError(error)) {
      throw error
    }
    const originalRequest = error.config
    if (!originalRequest) {
      throw error
    }
    if (error.response?.status !== 401) {
      throw new ApiError(
        error.response?.status ?? 500,
        error.response?.data?.message ?? 'Unexpected server error',
        error.response?.data?.errors,
      )
    }

    if (originalRequest.url === '/users/login') {
      throw new ApiError(401, error.response?.data?.message ?? 'Invalid email or password')
    }

    if (originalRequest._retry) {
      emitUnauthorized()
      throw new ApiError(401, 'Unauthorized')
    }
    originalRequest._retry = true
    const refreshToken = tokenService.getRefreshToken()
    if (!refreshToken) {
      emitUnauthorized()
      throw new ApiError(401, 'Refresh token not found')
    }
    if (isRefreshing) {
      return new Promise<string>((resolve, reject) => {
        failedQueue.push({ resolve, reject })
      }).then((token) => {
        originalRequest.headers.Authorization = `Bearer ${token}`

        return api(originalRequest)
      })
    }

    isRefreshing = true
    try {
      const response = await refreshApi.post<ILoginResponse>('/users/refresh', {
        refreshToken,
      })
      const { tokens } = response.data
      tokenService.saveTokens(tokens)
      processQueue(null, tokens.accessToken)
      originalRequest.headers.Authorization = `Bearer ${tokens.accessToken}`
      return api(originalRequest)
    } catch (error) {
      processQueue(error as Error)

      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          emitUnauthorized()
        }
      }
      throw error
    } finally {
      isRefreshing = false
    }
  },
)
