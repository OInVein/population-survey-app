import { Select } from './shared'

const years = [
  { value: '100', title: '100' },
  { value: '101', title: '101' },
  { value: '102', title: '102' },
  { value: '103', title: '103' },
  { value: '104', title: '104' },
]

function YearSelect() {
  return <Select id="year" label="年份" items={years} />
}

export default YearSelect
