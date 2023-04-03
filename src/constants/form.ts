import rawData from '../assets/json/city-county.json'

type CityCountyData = {
  [K: string]: string[]
}

type Year = {
  value: string
  title: string
}

export const cityCountyData: CityCountyData = rawData

export const yearItems: Year[] = [
  { value: '103', title: '103' },
  { value: '104', title: '104' },
  { value: '105', title: '105' },
  { value: '106', title: '106' },
  { value: '107', title: '107' },
  { value: '108', title: '108' },
  { value: '109', title: '109' },
  { value: '110', title: '110' },
  { value: '111', title: '111' },
]
