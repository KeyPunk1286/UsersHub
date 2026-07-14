import type { IEditForm, IUseFormReturn } from '@/types/formsInterface'
import {
  isEmailValid,
  isFirstNameValid,
  isLastNameValid,
  isDetailsValid,
} from '@/composables/validateFields'

export function useEditData(form: IUseFormReturn<IEditForm>) {

  const doValidate = (): boolean => {
    form.clearErrors()
    form.errors.email = isEmailValid(form.values.email)[0] ?? ''
    form.errors.firstName = isFirstNameValid(form.values.firstName)[0] ?? ''
    form.errors.lastName = isLastNameValid(form.values.lastName)[0] ?? ''
    form.errors.details = isDetailsValid(form.values.details)[0] ?? ''
    return Object.values(form.errors).every(value => value === '')
  }
  return { doValidate }
}
