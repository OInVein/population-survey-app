import ChartsLoading from './ChartsLoading'
import ChartsContainer from './ChartsContainer'
import ChartsTitle from './ChartsTitle'
import ResultContainer from './ResultContainer'

function Charts() {
  return (
    <ChartsContainer>
      <ChartsTitle />
      <ResultContainer>
        <ChartsLoading />
      </ResultContainer>
    </ChartsContainer>
  )
}

export default Charts
