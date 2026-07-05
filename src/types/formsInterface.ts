export interface ILoginForm {
  email: string
  password: string
}
export interface IRegistrationForm {
  email: string
  firstName: string
  lastName: string
  password: string
  details: string
}

export interface IRegistrationErrors {
  email: string[]
  firstName: string[]
  lastName: string[]
  password: string[]
  details: string[]
}

export interface IEditForm {
  email: string
  firstName: string
  lastName: string
  details: string
}

export interface IEditErrors {
  email: string[]
  firstName: string[]
  lastName: string[]
  details: string[]
}
