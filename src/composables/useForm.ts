import { reactive, ref } from 'vue'
import { createObjectWithValue } from '@/helper/object'

export function useForm<T extends object>(initialValues: T) {
  const initialState = { ...initialValues }
  const values = reactive({ ...initialValues })
  const initialErrors = createObjectWithValue(initialValues, '')
  const errors = reactive({ ...initialErrors })
  const serverError = ref<string | null>(null)
  const loading = ref(false)
  const submitted = ref(false)

  function reset() {
    Object.assign(values, initialState)
  }

  function clearErrors() {
    Object.assign(errors, initialErrors)
    serverError.value = null
  }

  async function submit<TResult>(callback: () => Promise<TResult>) {
    loading.value = true
    submitted.value = true

    try {
      return await callback()
    } finally {
      loading.value = false
    }
  }

  return {
    values,
    errors,
    serverError,
    loading,
    submitted,
    reset,
    clearErrors,
    submit,
  }
}
