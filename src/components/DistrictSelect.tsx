import { useEffect, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { Select } from './shared'
import { FormValues } from './types/Form'
import { cityCountyData } from '../constants'

function DistrictSelect() {
  const {
    watch,
    setValue,
    formState: { isDirty },
  } = useFormContext<FormValues>()
  const countyValue = watch('county')
  const items = useMemo(
    () =>
      (cityCountyData[countyValue] || []).map((value) => ({
        value,
        title: value,
      })),
    [countyValue],
  )

  useEffect(() => {
    if (isDirty) setValue('district', '')
  }, [items, setValue, isDirty])

  return (
    <Select
      id="district"
      label="區"
      placeholder="請先選擇 縣/市"
      items={items}
      disabled={items.length === 0}
    />
  )
}

export default DistrictSelect
