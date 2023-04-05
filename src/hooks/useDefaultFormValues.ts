import { yearItems } from '../constants'
import { FormValues } from '../components/types'
import useValidateUrlParams from './useValidateUrlParams'

const useDefaultFormValues = () => {
  const { year, county, district } = useValidateUrlParams()
  const defaultFormValues: FormValues = {
    year: year.isValid ? year.value : yearItems[0].value,
    county: county.isValid ? county.value : '',
    district: district.isValid ? district.value : '',
  }

  return defaultFormValues
}

export default useDefaultFormValues
