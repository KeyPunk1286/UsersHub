export function isEmailValid(value: string): string[] {
  const errors: string[] = []
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const email = value.trim()
  if (!email) {
    errors.push('Email is required')
  }
  if (!emailRegex.test(email)) {
    errors.push('Please enter a valid email address')
  }
  return errors
}

export function isFirstNameValid(value: string): string[] {
  const errors: string[] = []
  if (!value) {
    errors.push('First name is required')
  }
  if (value.length < 2) {
    errors.push('First name must be at least 2 characters long')
  }
  if (value.length > 30) {
    errors.push('First name must be no more than 30 characters long')
  }
  return errors
}

export function isLastNameValid(value: string): string[] {
  const errors: string[] = []
  if (!value) {
    errors.push('Last name is required')
  }
  if (value.length < 2) {
    errors.push('Last name must be at least 2 characters long')
  }
  if (value.length > 30) {
    errors.push('Last name must be no more than 30 characters long')
  }
  return errors
}

export function isPasswordValid(value: string): string[] {
  const errors: string[] = []
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/
  if (!value) {
    errors.push('Password is required')
  }
  if (!passwordRegex.test(value)) {
    errors.push('Password must contain at least one uppercase letter and one digit')
  }
  if (value.length < 5) {
    errors.push('Password must be at least 5 characters long')
  }
  if (value.length > 20) {
    errors.push('Password must be no more than 20 characters long')
  }
  return errors
}

export function isDetailsValid(value: string): string[] {
  const errors: string[] = []
  if (!value) {
    errors.push('Details are required')
  }
  if (value.length < 10) {
    errors.push('Details must be at least 10 characters long')
  }
  if (value.length > 200) {
    errors.push('Details must be no more than 200 characters long')
  }
  return errors
}
