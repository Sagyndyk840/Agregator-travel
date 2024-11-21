import axios from 'axios'
import { VITE_SCY_SCANNER_TOKEN, VITE_SCY_SCANNER_URL } from '@/shared/config'
export const scyScanner = axios.create({
  baseURL: VITE_SCY_SCANNER_URL
})

scyScanner.interceptors.request.use(function (config) {
  config.headers['x-rapidapi-key'] = VITE_SCY_SCANNER_TOKEN
  config.headers['x-rapidapi-host'] = 'sky-scrapper.p.rapidapi.com'
  return config
}, function (error) {
  return Promise.reject(error)
});
