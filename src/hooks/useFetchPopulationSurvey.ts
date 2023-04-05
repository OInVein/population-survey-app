import { useCallback, useEffect } from 'react'
import { FormStateProxy } from 'react-hook-form'
import { FormValues } from '../components/types'
import { usePopulationSurveyContext } from '../context'
import { fetchPopulationSurvey } from '../services'
import useValidateUrlParams from './useValidateUrlParams'

const useFetchPopulationSurvey = (isDirty: FormStateProxy['isDirty']) => {
  const { updateValue } = usePopulationSurveyContext()
  const { year, county, district } = useValidateUrlParams()

  const handleFetchPopulationSurvey = useCallback(
    (values: FormValues, isUnChanged?: boolean) => {
      if (isUnChanged) return

      updateValue?.({ isLoading: true })
      fetchPopulationSurvey({
        year: values.year,
        county: values.county,
        district: values.district,
      })
        .then((chartData = []) => {
          updateValue?.({ chartData, isLoading: false })
        })
        .catch((err) => {
          console.error('fetchError: ', err)
          updateValue?.({ isLoading: false })
        })
    },
    [updateValue],
  )

  useEffect(() => {
    if (isDirty || !year.isValid || !county.isValid || !district.isValid) return

    handleFetchPopulationSurvey({
      year: year.value,
      county: county.value,
      district: district.value,
    })
  }, [
    isDirty,
    year.isValid,
    year.value,
    district.isValid,
    district.value,
    county.isValid,
    county.value,
    handleFetchPopulationSurvey,
  ])

  return handleFetchPopulationSurvey
}

export default useFetchPopulationSurvey
