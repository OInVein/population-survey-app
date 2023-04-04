import { AppBar, Toolbar } from '@mui/material'
import { PageContainer, PageTitle, Logo, SettingIcon, Form, Charts } from '../components'
import { PopulationSurveyProvider } from '../context'

function PopulationSurveyPage() {
  return (
    <PopulationSurveyProvider>
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
    </PopulationSurveyProvider>
  )
}

export default PopulationSurveyPage
