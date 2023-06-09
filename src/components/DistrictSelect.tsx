import { useEffect, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { usePopulationSurveyContext } from '../context'
import { Select } from './shared'
import { FormValues } from './types/Form'
import { cityCountyData } from '../constants'

function DistrictSelect() {
  const { isLoading } = usePopulationSurveyContext()
  const {
    watch,
    setValue,
    formState: { dirtyFields },
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
    if (dirtyFields.county) {
      setValue('district', '')
    }
  }, [items, setValue, dirtyFields.county])

  return (
    <Select
      id="district"
      label="區"
      placeholder="請先選擇 縣/市"
      items={items}
      disabled={items.length === 0 || isLoading}
    />
  )
}

export default DistrictSelect
