import { AppBar, Toolbar } from '@mui/material'
import { PageContainer, PageTitle, Logo, SettingIcon, Form } from '../components'
import { useDefaultFormValues } from '../hooks'

function PopulationSurveyPage() {
  const defaultFormValues = useDefaultFormValues()

  return (
    <PageContainer>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Logo />
          <SettingIcon />
        </Toolbar>
      </AppBar>
      <PageTitle />
      <Form defaultValues={defaultFormValues} />
    </PageContainer>
  )
}

export default PopulationSurveyPage
