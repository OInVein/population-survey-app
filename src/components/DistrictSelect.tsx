import { Select } from './shared'

const years = [
  { value: '100', title: '100' },
  { value: '101', title: '101' },
  { value: '102', title: '102' },
  { value: '103', title: '103' },
  { value: '104', title: '104' },
]

function DistrictSelect() {
  return <Select id="county" label="區" placeholder="請先選擇 縣/市" items={years} />
}

export default DistrictSelect
