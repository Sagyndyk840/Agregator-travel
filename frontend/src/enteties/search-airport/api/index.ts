import { ScyScannerApi } from '@/shared/api'
import type { ISearchAirportData, ISearchAirportResponse } from '@/enteties/search-airport/model'

export const api = {
  searchAirport
}

async function searchAirport (data: ISearchAirportData) {
  try {
    return await ScyScannerApi.get<ISearchAirportResponse>('v1/flights/searchAirport', data)
  } catch (error) {
    console.log(error)
  }
}

