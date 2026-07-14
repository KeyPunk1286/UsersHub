export interface IUserData {
  id: string
  email: string
  firstName: string
  lastName: string
  details: string
}

export interface ITokenPair {
    accessToken: string
    refreshToken: string
}

export interface ILoginResponse { 
  userData: IUserData
   tokens: ITokenPair
}

export interface IValidationError {
  field: string
  messages: string[]
}