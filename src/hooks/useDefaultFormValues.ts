import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { yearItems, cityCountyData } from '../constants'
import { FormValues } from '../components/types'

const useDefaultFormValues = () => {
  const { pathname } = useLocation()
  const defaultFormValues: FormValues = useMemo(() => {
    const pathes = pathname.split('/').filter(Boolean)
    const hasPathes = pathes.length === 3

    if (!hasPathes) {
      return {
        year: yearItems[0].value,
        county: '',
        district: '',
      }
    }

    const [year, county, district] = pathes.map((path) => decodeURIComponent(path))
    const isValidYear = yearItems.some(({ value }) => value === year)
    const isValidCounty = county in cityCountyData
    const isValidDistrict = isValidCounty && cityCountyData[county].includes(district)

    return {
      year: isValidYear ? year : yearItems[0].value,
      county: isValidCounty ? county : '',
      district: isValidDistrict ? district : '',
    }
  }, [pathname])

  return defaultFormValues
}

export default useDefaultFormValues
