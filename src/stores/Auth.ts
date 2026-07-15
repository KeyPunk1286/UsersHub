import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IUserData } from '@/types/authInterface'
import { authService } from '@/services/auth.service'
import type { ILoginForm, IRegistrationForm, IEditForm } from '@/types/formsInterface'
import { resetUnauthorized } from '@/events/auth.events'
import { tokenService } from '@/services/token.service'

export const useAuthStore = defineStore('auth', () => {
  const userInfo = ref<IUserData | null>(null)
  const isAuthenticated = computed(() => !!userInfo.value)
  const loading = ref(false)

  async function login(data: ILoginForm) {
    loading.value = true
    try {
      const response = await authService.login(data)
      userInfo.value = response.userData
      tokenService.saveTokens(response.tokens)
      resetUnauthorized()
    } finally {
      loading.value = false
    }
  }
  async function restoreSession() {
    if (!tokenService.getAccessToken()) return
    try {
      const user = await authService.getUserInfo()

      userInfo.value = user

      resetUnauthorized()
    } catch {
      clearSession()
    }
  }

  async function register(data: IRegistrationForm) {
    loading.value = true
    try {
      return await authService.register(data)
    } finally {
      loading.value = false
    }
  }

  async function updateProfile(dto: IEditForm) {
    loading.value = true
    try {
      const updateUser = await authService.updateProfile(dto)
      userInfo.value = updateUser
    } finally {
      loading.value = false
    }
  }

  function clearSession() {
    userInfo.value = null
    tokenService.clearTokens()
  }

  async function logout() {
    loading.value = true
    try {
      await authService.logout()
    } finally {
      clearSession()
      loading.value = false
    }
  }
  return {
    userInfo,
    loading,
    login,
    register,
    updateProfile,
    isAuthenticated,
    restoreSession,
    logout,
    clearSession,
  }
})
