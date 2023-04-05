import { useLocation } from 'react-router-dom'
import { yearItems, cityCountyData } from '../constants'

const useValidateUrlParams = () => {
  const { pathname } = useLocation()
  const pathes = pathname.split('/').filter(Boolean)
  const [year, county, district] = pathes.map((path) => decodeURIComponent(path))
  const isValidYear = yearItems.some(({ value }) => value === year)
  const isValidCounty = county in cityCountyData
  const isValidDistrict = isValidCounty && cityCountyData[county].includes(district)

  return {
    year: { value: year, isValid: isValidYear },
    county: { value: county, isValid: isValidCounty },
    district: { value: district, isValid: isValidDistrict },
  }
}

export default useValidateUrlParams
