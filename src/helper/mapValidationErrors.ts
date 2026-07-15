import type { IValidationError } from '@/types/authInterface'

export function mapValidationErrors(errors: IValidationError[]): Record<string, string> {
  const result: Record<string, string> = {}

  for (const error of errors) {
    result[error.field] = error.messages[0] ?? ''
  }

  return result
}
