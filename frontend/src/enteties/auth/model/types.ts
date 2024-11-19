interface IAuthData {
  email: string
  password: string
}

export interface ILoginData extends IAuthData {}

interface IUserResponse {
  id: string,
  name: string,
  lastname: string,
  email: string,
}

interface ITokenResponse {
  accessToken: string,
  refreshToken: string,
}

export interface IAuthResponse extends ITokenResponse {
  user: IUserResponse
}

