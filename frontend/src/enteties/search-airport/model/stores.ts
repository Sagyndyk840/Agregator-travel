import { defineStore } from 'pinia'
import { api } from '@/enteties/search-airport/api'
import type { ISearchAirportData, ISearchAirportItemResponse, } from '@/enteties/search-airport/model/types'
import { type Ref, ref } from 'vue'

const NAMESPACE = 'search-airport'

interface ISearchAirportStore {
  searchAirports: Ref<ISearchAirportItemResponse[]>
  getSearchAirports: (params: ISearchAirportData) => Promise<void>
}

export const useSearchAirportStore = defineStore(NAMESPACE, (): ISearchAirportStore  => {

  const searchAirports: Ref<ISearchAirportItemResponse[]> = ref([])

  async function getSearchAirports (params: ISearchAirportData){
    const response = await api.searchAirport(params)

    if (Array.isArray(response?.data)) {
      searchAirports.value = response.data
    }
  }

  return {
    searchAirports,
    getSearchAirports
  }

})


