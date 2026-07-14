import type { Ref } from "vue";

export interface ILoginForm {
  email: string
  password: string
}
export interface IRegistrationForm {
  email: string
  firstName: string
  lastName: string
  password: string
  details: string
}

export interface IRegistrationErrors {
  email: string[]
  firstName: string[]
  lastName: string[]
  password: string[]
  details: string[]
}

export interface IEditForm {
  email: string
  firstName: string
  lastName: string
  details: string
}

export interface IEditErrors {
  email: string[]
  firstName: string[]
  lastName: string[]
  details: string[]
}

export interface RefreshTokenDto {
    refreshToken: string;
}


//====================================

export interface FormState<T> {
  values: T
  loading: boolean
  submitted: boolean
}

export type FormErrors<T> = {
  [K in keyof T]: string
}

export interface IUseFormReturn<T> {
  values: T
  errors: FormErrors<T>
  serverError: Ref<string | null>
  loading: Ref<boolean>
  submitted: Ref<boolean>
  reset(): void
  clearErrors(): void
  submit<TResult>(
    callback: () => Promise<TResult>
  ): Promise<TResult>
}