import { Select } from './shared'
import { yearItems } from '../constants'

function YearSelect() {
  return <Select id="year" label="年份" defaultValue={yearItems[0].value} items={yearItems} />
}

export default YearSelect
