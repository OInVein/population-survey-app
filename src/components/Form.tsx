import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useCallback, useEffect } from 'react'
import FormContainer from './FormContainer'
import YearSelect from './YearSelect'
import CountySelect from './CountySelect'
import DistrictSelect from './DistrictSelect'
import SubmitButton from './SubmitButton'
import { FormValues, FormProps } from './types'
import { useDefaultFormValues, useValidateUrlParams } from '../hooks'
import { usePopulationSurveyContext } from '../context'
import { fetchPopulationSurvey } from '../services'

function Form({ children }: FormProps) {
  const defaultValues = useDefaultFormValues()
  const method = useForm<FormValues>({ defaultValues })
  const navigate = useNavigate()
  const {
    handleSubmit,
    formState: { isDirty },
  } = method
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

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    const newUrl = `/${values.year}/${values.county}/${values.district}`
    const isUnChanged =
      year.value === values.year &&
      county.value === values.county &&
      district.value === values.district

    handleFetchPopulationSurvey(values, isUnChanged)
    navigate(newUrl, { replace: true })
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...method}>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <YearSelect />
        <CountySelect />
        <DistrictSelect />
        <SubmitButton />
      </FormContainer>
      {children}
    </FormProvider>
  )
}

export default Form
