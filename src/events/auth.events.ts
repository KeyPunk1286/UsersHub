type UnauthorizedHandler = () => void

let unauthorizedHandler: UnauthorizedHandler | null = null

let isUnauthorizedHandled = false

export function onUnauthorized(handler: UnauthorizedHandler): void {
  unauthorizedHandler = handler
}

export function emitUnauthorized(): void {
  if (isUnauthorizedHandled) return
  isUnauthorizedHandled = true
  unauthorizedHandler?.()
}

export function resetUnauthorized() {
  isUnauthorizedHandled = false
}
