import type { ILoginForm, RefreshTokenDto } from '@/types/formsInterface'
import { api, refreshApi } from './axios'
import type { ILoginResponse, IUserData } from '@/types/authInterface'
import type { IRegistrationForm, IEditForm } from '@/types/formsInterface'

export const authApi = {
  async login(data: ILoginForm): Promise<ILoginResponse> {
    const response = await api.post<ILoginResponse>('/users/login', data)
    return response.data
  },
  async refresh(dto: RefreshTokenDto): Promise<ILoginResponse> {
    const response = await refreshApi.post<ILoginResponse>('/users/refresh', dto)
    return response.data
  },
  async getUserInfo(): Promise<IUserData> {
    const response = await api.get<IUserData>('/users/get-user')
    return response.data
  },
  async register(data: IRegistrationForm): Promise<IUserData> {
    const response = await api.post<IUserData>('/users/registration', data)
    return response.data
  },
  async updateProfile(data: IEditForm): Promise<IUserData> {
    const response = await api.put<IUserData>('/users/update-user', data)
    return response.data
  },
  async logout(): Promise<void> {
    await api.post('/users/logout')
  },
}
