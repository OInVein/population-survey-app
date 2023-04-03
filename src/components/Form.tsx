import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import FormContainer from './FormContainer'
import YearSelect from './YearSelect'
import CountySelect from './CountySelect'
import DistrictSelect from './DistrictSelect'
import SubmitButton from './SubmitButton'
import { FormProps, FormValues } from './types/Form'

function Form({ defaultValues }: FormProps) {
  const navigate = useNavigate()
  const method = useForm<FormValues>({ defaultValues })
  const { handleSubmit } = method

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { year, county, district } = data
    const newUrl = `/${year}/${county}/${district}`
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
    </FormProvider>
  )
}

export default Form
