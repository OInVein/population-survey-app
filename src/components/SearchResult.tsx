import SearchResultContainer from './SearchResultContainer'
import SearchResultTitle from './SearchResultTitle'
import ChartsContainer from './ChartsContainer'
import ResultCharts from './ResultCharts'
import { usePopulationSurveyContext } from '../context'
import Loading from './Loading'

function SearchResult() {
  const { isLoading } = usePopulationSurveyContext()
  return (
    <SearchResultContainer>
      <SearchResultTitle />
      <ChartsContainer>{isLoading ? <Loading /> : <ResultCharts />}</ChartsContainer>
    </SearchResultContainer>
  )
}

export default SearchResult
