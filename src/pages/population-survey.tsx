import { AppBar, Toolbar } from '@mui/material'
import { PageContainer, PageTitle, Logo, SettingIcon, Form } from '../components'

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
      <Form />
    </PageContainer>
  )
}

export default PopulationSurveyPage
