// export const BACKEND_API_DEV_URL = getEnv('BACKEND_API_DEV_URL')
// export const BACKEND_API_PROD_URL = getEnv('BACKEND_API_PROD_URL')
//
// export const isProdEnv = getEnv('PROD')

// export const BASE_URL = isProdEnv ? BACKEND_API_PROD_URL : BACKEND_API_DEV_URL
export const BASE_URL: string = 'http://localhost:20000'

// function getEnv(key: string) {
//   const envVar = import.meta.env[key]
//   if (envVar === undefined) {
//     throw new Error(`Env variable ${key} is required`)
//   }
//   return envVar
// }
