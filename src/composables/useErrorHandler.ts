import { ApiError } from '@/errors/ApiError'
import { mapValidationErrors } from '@/helper/mapValidationErrors'
import { useToastService } from '@/composables/useToastService'
import type { IUseFormReturn } from '@/types/formsInterface'

export function useErrorHandler() {
  const toast = useToastService()

  function handle<T extends object>(
    error: unknown,
    form?: IUseFormReturn<T>,
  ): void {
    if (!(error instanceof ApiError)) {
      toast.error(
        'Unexpected Error',
        'Something went wrong.'
      )
      return
    }

    switch (error.status) {
      case 422:
        if (form && error.errors) {
          Object.assign(
            form.errors,
            mapValidationErrors(error.errors),
          )
        }
        return

      case 401:
        if (form) {
          form.serverError.value = error.message
          return
        }

        toast.error(
          'Unauthorized',
          error.message,
        )
        return
      case 409:
        toast.error(
          'Registration',
          error.message
        )

      case 500:
        toast.error(
          'Server Error',
          error.message,
        )
        return

      default:
        toast.error(
          'Error',
          error.message,
        )
    }
  }

  return {
    handle,
  }
}