import rawData from '../assets/json/city-county.json'

export type CityCountyData = {
  [K: string]: string[]
}

export const cityCountyData: CityCountyData = rawData
