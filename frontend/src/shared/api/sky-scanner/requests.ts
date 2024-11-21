import { scyScanner } from './instance'

export async function get<T>(url: string, params?: {}) {
  return await scyScanner.get<T>(url, params)
}

export async function post<T>(url: string, params?: {}) {
  return await scyScanner.post<T>(url,  params)
}

export async function put<T>(url: string, params?: {}) {
  return await scyScanner.put<T>(url, params)
}

export async function patch<T>(url: string, params?: {}) {
  return await scyScanner.patch<T>(url, params)
}

export async function remove<T>(url: string, params?: {}) {
  return await scyScanner.delete<T>(url, params)
}