import { reactive } from 'vue'
import type { IRegistrationForm, IRegistrationErrors } from '@/types/formsInterface'
import {
  isEmailValid,
  isFirstNameValid,
  isLastNameValid,
  isPasswordValid,
  isDetailsValid,
} from '@/composables/validateFields'

export function useRegistrationValidation() {
  const registrationData = reactive<IRegistrationForm>({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    details: '',
  })
  const registrationErrors = reactive<IRegistrationErrors>({
    email: [],
    firstName: [],
    lastName: [],
    password: [],
    details: [],
  })
  const clearErrors = (): void => {
    registrationErrors.email = []
    registrationErrors.firstName = []
    registrationErrors.lastName = []
    registrationErrors.password = []
    registrationErrors.details = []
  }

  const doValidate = (): boolean => {
    clearErrors()
    registrationErrors.email = isEmailValid(registrationData.email)
    registrationErrors.firstName = isFirstNameValid(registrationData.firstName)
    registrationErrors.lastName = isLastNameValid(registrationData.lastName)
    registrationErrors.password = isPasswordValid(registrationData.password)
    registrationErrors.details = isDetailsValid(registrationData.details)
    return Object.values(registrationErrors).every((errorArray) => errorArray.length === 0)
  }

  const handleSubmit = (): void => {
    if (doValidate()) {
      console.log('Form submitted:', registrationData)
    }
  }
  return { registrationData, registrationErrors, handleSubmit }
}
