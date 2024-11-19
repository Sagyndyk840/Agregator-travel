import { defineStore } from 'pinia'
import { api } from '../api'

const NAMESPACE = 'auth'

export const useAuthStore = defineStore(NAMESPACE, () => {

  function setToken (accessToken: string, refreshToken: string) {
    localStorage.setItem('accessToken', accessToken)
    localStorage.setItem('refreshToken', refreshToken)
  }

  return {
    setToken
  }

})