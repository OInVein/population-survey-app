import { Select } from './shared'

const years = [
  { value: '103', title: '103' },
  { value: '104', title: '104' },
  { value: '105', title: '105' },
  { value: '106', title: '106' },
  { value: '107', title: '107' },
  { value: '108', title: '108' },
  { value: '109', title: '109' },
  { value: '110', title: '110' },
  { value: '111', title: '111' },
]

function YearSelect() {
  return <Select id="year" label="年份" defaultValue={years[0].value} items={years} />
}

export default YearSelect
