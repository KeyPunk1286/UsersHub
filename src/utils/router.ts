import type { LocationQueryValue } from 'vue-router'

export function getRedirectPath(
  redirect: LocationQueryValue | LocationQueryValue[] | undefined,
  fallback: string
): string {
  if (typeof redirect === 'string') {
    return redirect
  }
  if (Array.isArray(redirect)) {
    const first = redirect[0]
    if (typeof first === 'string') {
      return first
    }
  }
  return fallback
}