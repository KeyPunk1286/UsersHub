import { authApi } from '@/api/auth.api'
import type { IUserData } from '@/types/authInterface'
import type { ILoginForm, IRegistrationForm, RefreshTokenDto, IEditForm } from '@/types/formsInterface'

export const authService = {
  async login(data: ILoginForm) {
    return authApi.login(data)
    
  },
  async refresh(dto: RefreshTokenDto) {
    return authApi.refresh(dto)
     
  },
  async getUserInfo() {
      return authApi.getUserInfo()
      
  },
  async register(dto:IRegistrationForm) {
    return authApi.register(dto)
  },
  async updateProfile(dto: IEditForm) {
    return authApi.updateProfile(dto)
  },
  async logout() {
    authApi.logout()
  }
}