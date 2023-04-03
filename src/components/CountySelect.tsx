import { Select } from './shared'
import cityCountyData from '../assets/json/city-county.json'

const items = Object.keys(cityCountyData).map((value) => ({ value, title: value }))

function CountySelect() {
  return <Select id="county" label="縣/市" placeholder="請選擇 縣/市" items={items} />
}

export default CountySelect
