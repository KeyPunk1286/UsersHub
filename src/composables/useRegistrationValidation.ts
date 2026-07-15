import type { IRegistrationForm,  IUseFormReturn } from '@/types/formsInterface'
import {
  isEmailValid,
  isFirstNameValid,
  isLastNameValid,
  isPasswordValid,
  isDetailsValid,
} from '@/composables/validateFields'

export function useRegistrationValidation(form: IUseFormReturn<IRegistrationForm>) {
  const doValidate = (): boolean => {
    form.clearErrors()
    form.errors.email = isEmailValid(form.values.email)[0] ?? ''
    form.errors.firstName = isFirstNameValid(form.values.firstName)[0] ?? ''
    form.errors.lastName = isLastNameValid(form.values.lastName)[0] ?? ''
    form.errors.password = isPasswordValid(form.values.password)[0] ?? ''
    form.errors.details = isDetailsValid(form.values.details)[0] ?? ''
    return Object.values(form.errors).every((value) => value === '')
  }

  return { doValidate }
}
