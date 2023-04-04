import { usePopulationSurveyContext } from '../context'
import { Select } from './shared'
import { yearItems } from '../constants'

function YearSelect() {
  const { isLoading } = usePopulationSurveyContext()
  return <Select id="year" label="年份" disabled={isLoading} items={yearItems} />
}

export default YearSelect
