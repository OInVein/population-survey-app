import { Select } from './shared'
import { yearItems } from '../constants'

function YearSelect() {
  return <Select id="year" label="年份" items={yearItems} />
}

export default YearSelect
