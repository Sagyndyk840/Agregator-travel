import { post } from '@/shared/api'
// import { type IAuthResponse, type ILoginData } from '@/enteties/auth/model/types'
import { type IAuthResponse, type ILoginData } from '@/enteties/auth/model'

export const api = {
  login,
  refresh,
  logout
}

async function login (data: ILoginData) {
  try {
    return await post<IAuthResponse>('/api/login', data)
  } catch (error) {
    console.log(error)
  }
}

async function refresh () {
  try {
    console.log('refresh')
  } catch (error) {
    console.log(error)
  }
}

async function logout () {
  try {
    console.log('logout')
  } catch (error) {
    console.log(error)
  }
}