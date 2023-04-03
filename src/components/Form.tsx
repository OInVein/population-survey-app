import { FormProvider, Resolver, SubmitHandler, useForm } from 'react-hook-form'
import FormContainer from './FormContainer'
import YearSelect from './YearSelect'
import CountySelect from './CountySelect'
import DistrictSelect from './DistrictSelect'
import SubmitButton from './SubmitButton'
import { FormValues } from './types/Form'

function Form() {
  const method = useForm<FormValues>({
    defaultValues: {
      year: '103',
      county: '',
      district: '',
    },
  })
  const { handleSubmit } = method

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

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
