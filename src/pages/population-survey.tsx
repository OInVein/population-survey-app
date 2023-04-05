import { PageContainer, PageTitle, Form, AppToolbar } from '../components'
import { PopulationSurveyProvider } from '../context'

function PopulationSurveyPage() {
  return (
    <PopulationSurveyProvider>
      <PageContainer>
        <AppToolbar />
        <PageTitle />
        <Form />
      </PageContainer>
    </PopulationSurveyProvider>
  )
}

export default PopulationSurveyPage
