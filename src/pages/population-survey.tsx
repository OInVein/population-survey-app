import { AppBar, Toolbar } from '@mui/material'
import { PageContainer, PageTitle, Logo, SettingIcon, Form, Charts } from '../components'

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
      <Charts />
    </PageContainer>
  )
}

export default PopulationSurveyPage
