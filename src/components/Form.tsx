import YearSelect from './YearSelect'
import CountySelect from './CountySelect'
import DistrictSelect from './DistrictSelect'
import SubmitButton from './SubmitButton'
import FormContainer from './FormContainer'

function Form() {
  return (
    <FormContainer>
      <YearSelect />
      <CountySelect />
      <DistrictSelect />
      <SubmitButton />
    </FormContainer>
  )
}

export default Form
