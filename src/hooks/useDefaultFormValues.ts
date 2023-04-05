import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { yearItems } from '../constants'
import { FormValues } from '../components/types'
import useValidateUrlParams from './useValidateUrlParams'

const useDefaultFormValues = () => {
  const { pathname } = useLocation()
  const { year, county, district } = useValidateUrlParams()
  const defaultFormValues: FormValues = useMemo(() => {
    const pathes = pathname.split('/').filter(Boolean)
    const hasPathes = pathes.length === 3

    return !hasPathes
      ? {
          year: yearItems[0].value,
          county: '',
          district: '',
        }
      : {
          year: year.isValid ? year.value : yearItems[0].value,
          county: county.isValid ? county.value : '',
          district: district.isValid ? district.value : '',
        }
  }, [
    pathname,
    year.isValid,
    year.value,
    county.isValid,
    county.value,
    district.isValid,
    district.value,
  ])

  return defaultFormValues
}

export default useDefaultFormValues
