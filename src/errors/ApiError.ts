import type { IValidationError } from '@/types/authInterface'

export class ApiError extends Error {
  readonly status: number
  readonly errors?: IValidationError[]
  constructor(status: number, message: string, errors?: IValidationError[]) {
    super(message)

    this.name = 'ApiError'
    this.status = status
    this.errors = errors
  }
}
