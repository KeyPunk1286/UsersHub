import { reactive } from 'vue'
import type { IEditForm, IEditErrors } from '@/types/formsInterface'
import {
  isEmailValid,
  isFirstNameValid,
  isLastNameValid,
  isDetailsValid,
} from '@/composables/validateFields'

export function useEditData() {
  const editData = reactive<IEditForm>({
    email: '',
    firstName: '',
    lastName: '',
    details: '',
  })
  const editErrors = reactive<IEditErrors>({
    email: [],
    firstName: [],
    lastName: [],
    details: [],
  })
  const clearErrors = (): void => {
    editErrors.email = []
    editErrors.firstName = []
    editErrors.lastName = []
    editErrors.details = []
  }

  const doValidate = (): boolean => {
    clearErrors()
    editErrors.email = isEmailValid(editData.email)
    editErrors.firstName = isFirstNameValid(editData.firstName)
    editErrors.lastName = isLastNameValid(editData.lastName)
    editErrors.details = isDetailsValid(editData.details)
    return Object.values(editErrors).every((errorArray) => errorArray.length === 0)
  }

  const handleSubmit = (): void => {
    if (doValidate()) {
      console.log('Form submitted:', editData)
    }
  }
  return { editData, editErrors, handleSubmit }
}
