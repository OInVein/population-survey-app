import { PageContainer, PageTitle, Form, AppToolbar, SearchResult } from '../components'
import { PopulationSurveyProvider } from '../context'

function PopulationSurveyPage() {
  return (
    <PopulationSurveyProvider>
      <PageContainer>
        <AppToolbar />
        <PageTitle />
        <Form>
          <SearchResult />
        </Form>
      </PageContainer>
    </PopulationSurveyProvider>
  )
}

export default PopulationSurveyPage
