export interface ISearchAirportData {
  query: string
  locale?: string
}

interface ISearchAirportItemPresentationResponse {
  title: string
  suggestionTitle: string
  subtitle: string
}

// interface ISearchAirportItemNavigationResponse {
//   entityId: string
//   entityType: string
//   localizedName: string
// }

export interface ISearchAirportItemResponse {
  skyId: string
  entityId: string
  presentation: ISearchAirportItemPresentationResponse
  // navigation: ISearchAirportItemNavigationResponse
}

export interface ISearchAirportResponse {
  status: boolean
  timestamp: number
  data: ISearchAirportItemResponse[]
}

