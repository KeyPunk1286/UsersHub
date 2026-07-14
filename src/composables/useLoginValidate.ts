import { reactive } from 'vue'
import type { ILoginForm, IUseFormReturn } from '@/types/formsInterface'

export function useLoginValidate(form: IUseFormReturn<ILoginForm>) {
  
  const isEmailValid = (): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const email = form.values.email.trim()
    if (!email) {
      form.errors.email = 'Email is required'
      return false
    } else if (!emailRegex.test(email)) {
      form.errors.email = 'Please enter a valid email address'
      return false
    }
    return true
  }
  const isPasswordValid = (): boolean => {
    const pass = form.values.password
    if (!pass) {
      form.errors.password = 'Password is required'
      return false
    }
    return true
  }

  const doValidate = (): boolean => {
    form.clearErrors()
    const isEmailValidResult = isEmailValid()
    const isPasswordValidResult = isPasswordValid()
    return isEmailValidResult && isPasswordValidResult
  }

 
  return { doValidate }
}
