import { useEffect, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { Select } from './shared'
import { FormValues } from './types/Form'
import { cityCountyData } from '../constants'

function DistrictSelect() {
  const { watch, setValue } = useFormContext<FormValues>()
  const countyValue = watch('county')
  const [items, key] = useMemo(
    () => [
      (cityCountyData[countyValue] || []).map((value) => ({
        value,
        title: value,
      })),
      Math.random(),
    ],
    [countyValue],
  )

  useEffect(() => {
    setValue('district', '')
  }, [items, setValue])

  return <Select id="district" key={key} label="區" placeholder="請先選擇 縣/市" items={items} />
}

export default DistrictSelect
