import { AppBar, Toolbar } from '@mui/material'
import {
  PageContainer,
  PageTitle,
  Logo,
  SettingIcon,
  FormContainer,
  YearSelect,
  CountySelect,
  DistrictSelect,
  SubmitButton,
} from '../components'

function PopulationSurveyPage() {
  return (
    <PageContainer>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Logo />
          <SettingIcon />
        </Toolbar>
      </AppBar>
      <PageTitle />
      <FormContainer>
        <YearSelect />
        <CountySelect />
        <DistrictSelect />
        <SubmitButton />
      </FormContainer>
    </PageContainer>
  )
}

export default PopulationSurveyPage
