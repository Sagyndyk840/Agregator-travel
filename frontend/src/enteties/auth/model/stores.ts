import { defineStore } from 'pinia'

const NAMESPACE = 'auth'

interface IAuthStore {
  setToken: (accessToken: string, refreshToken: string) => void
}

export const useAuthStore = defineStore(NAMESPACE, (): IAuthStore => {

  function setToken (accessToken: string, refreshToken: string) {
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)
  }

  return {
    setToken
  }

})