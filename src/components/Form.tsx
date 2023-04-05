import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import FormContainer from './FormContainer'
import YearSelect from './YearSelect'
import CountySelect from './CountySelect'
import DistrictSelect from './DistrictSelect'
import SubmitButton from './SubmitButton'
import { FormValues, FormProps } from './types'
import { useDefaultFormValues, useValidateUrlParams, useFetchPopulationSurvey } from '../hooks'

function Form({ children }: FormProps) {
  const defaultValues = useDefaultFormValues()
  const method = useForm<FormValues>({ defaultValues })
  const navigate = useNavigate()
  const {
    handleSubmit,
    formState: { isDirty },
  } = method
  const { year, county, district } = useValidateUrlParams()
  const handleFetchPopulationSurvey = useFetchPopulationSurvey(isDirty)

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
