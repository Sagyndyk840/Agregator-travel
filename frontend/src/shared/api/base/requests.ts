import { instance } from './instance'

export async function get<T>(url: string, params?: {}) {
  return await instance.get<T>(url, params)
}

export async function post<T>(url: string, params?: {}) {
  return await instance.post<T>(url,  params)
}

export async function put<T>(url: string, params?: {}) {
  return await instance.put<T>(url, params)
}

export async function patch<T>(url: string, params?: {}) {
  return await instance.patch<T>(url, params)
}

export async function remove<T>(url: string, params?: {}) {
  return await instance.delete<T>(url, params)
}