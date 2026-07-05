import { reactive } from 'vue'
import type { ILoginForm } from '@/types/formsInterface'

export function useLoginValidate() {
  const loginData = reactive<ILoginForm>({
    email: '',
    password: '',
  })
  const errorsLoginData = reactive<ILoginForm>({
    email: '',
    password: '',
  })
  const clearErrors = (): void => {
    errorsLoginData.email = ''
    errorsLoginData.password = ''
  }

  const isEmailValid = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const email = loginData.email.trim()
    if (!email) {
      errorsLoginData.email = 'Email is required'
      return false
    } else if (!emailRegex.test(email)) {
      errorsLoginData.email = 'Please enter a valid email address'
      return false
    }
    return true
  }
  const isPasswordValid = (): boolean => {
    const pass = loginData.password
    if (!pass) {
      errorsLoginData.password = 'Password is required'
      return false
    }
    return true
  }

  const doValidate = (): boolean => {
    clearErrors()
    const isEmailValidResult = isEmailValid()
    const isPasswordValidResult = isPasswordValid()
    return isEmailValidResult && isPasswordValidResult
  }

  const handleSubmit = (): void => {
    if (doValidate()) {
      console.log('Form submitted:', loginData)
    }
  }
  return { loginData, errorsLoginData, handleSubmit }
}
