import Loading from './Loading'
import ChartsContainer from './ChartsContainer'
import ChartsTitle from './ChartsTitle'
import ResultContainer from './ResultContainer'
import ResultCharts from './ResultCharts'
import { usePopulationSurveyContext } from '../context'

function SearchResult() {
  const { isLoading } = usePopulationSurveyContext()
  return (
    <ChartsContainer>
      <ChartsTitle />
      <ResultContainer>{isLoading ? <Loading /> : <ResultCharts />}</ResultContainer>
    </ChartsContainer>
  )
}

export default SearchResult
