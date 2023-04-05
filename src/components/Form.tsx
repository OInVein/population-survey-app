import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useCallback, useEffect } from 'react'
import FormContainer from './FormContainer'
import YearSelect from './YearSelect'
import CountySelect from './CountySelect'
import DistrictSelect from './DistrictSelect'
import SubmitButton from './SubmitButton'
import Charts from './Charts'
import { FormValues } from './types'
import { useDefaultFormValues, useValidateUrlParams } from '../hooks'
import { usePopulationSurveyContext } from '../context'
import { fetchPopulationSurvey } from '../services'

function Form() {
  const defaultValues = useDefaultFormValues()
  const method = useForm<FormValues>({ defaultValues })
  const navigate = useNavigate()
  const {
    handleSubmit,
    formState: { isDirty },
  } = method
  const { updateValue } = usePopulationSurveyContext()
  const { year, county, district } = useValidateUrlParams()

  const handleFetchPopulationSurvey = useCallback(
    (values: FormValues, isUnChanged?: boolean) => {
      if (isUnChanged) return

      updateValue?.({ isLoading: true })
      fetchPopulationSurvey({
        year: values.year,
        county: values.county,
        district: values.district,
      })
        .then((data) => {
          const chartData = data.responseData || []
          // const chartData = [
          //   {
          //     statistic_yyy: '111',
          //     district_code: '64000180001',
          //     site_id: '高雄市鳥松區',
          //     village: '鳥松里',
          //     household_ordinary_total: '2822',
          //     household_business_total: '1',
          //     household_single_total: '2792',
          //     household_ordinary_m: '4274',
          //     household_business_m: '0',
          //     household_single_m: '1402',
          //     household_ordinary_f: '4409',
          //     household_business_f: '8',
          //     household_single_f: '1390',
          //   },
          //   {
          //     statistic_yyy: '111',
          //     district_code: '64000180002',
          //     site_id: '高雄市鳥松區',
          //     village: '夢裡里',
          //     household_ordinary_total: '1374',
          //     household_business_total: '0',
          //     household_single_total: '1251',
          //     household_ordinary_m: '2092',
          //     household_business_m: '0',
          //     household_single_m: '660',
          //     household_ordinary_f: '2136',
          //     household_business_f: '0',
          //     household_single_f: '591',
          //   },
          //   {
          //     statistic_yyy: '111',
          //     district_code: '64000180003',
          //     site_id: '高雄市鳥松區',
          //     village: '大華里',
          //     household_ordinary_total: '2913',
          //     household_business_total: '0',
          //     household_single_total: '1857',
          //     household_ordinary_m: '4462',
          //     household_business_m: '0',
          //     household_single_m: '922',
          //     household_ordinary_f: '4608',
          //     household_business_f: '0',
          //     household_single_f: '935',
          //   },
          //   {
          //     statistic_yyy: '111',
          //     district_code: '64000180004',
          //     site_id: '高雄市鳥松區',
          //     village: '坔埔里',
          //     household_ordinary_total: '966',
          //     household_business_total: '1',
          //     household_single_total: '533',
          //     household_ordinary_m: '1706',
          //     household_business_m: '0',
          //     household_single_m: '299',
          //     household_ordinary_f: '1596',
          //     household_business_f: '15',
          //     household_single_f: '234',
          //   },
          //   {
          //     statistic_yyy: '111',
          //     district_code: '64000180005',
          //     site_id: '高雄市鳥松區',
          //     village: '仁美里',
          //     household_ordinary_total: '1859',
          //     household_business_total: '0',
          //     household_single_total: '1124',
          //     household_ordinary_m: '3221',
          //     household_business_m: '0',
          //     household_single_m: '638',
          //     household_ordinary_f: '3031',
          //     household_business_f: '0',
          //     household_single_f: '486',
          //   },
          //   {
          //     statistic_yyy: '111',
          //     district_code: '64000180006',
          //     site_id: '高雄市鳥松區',
          //     village: '大竹里',
          //     household_ordinary_total: '189',
          //     household_business_total: '0',
          //     household_single_total: '121',
          //     household_ordinary_m: '332',
          //     household_business_m: '0',
          //     household_single_m: '69',
          //     household_ordinary_f: '297',
          //     household_business_f: '0',
          //     household_single_f: '52',
          //   },
          //   {
          //     statistic_yyy: '111',
          //     district_code: '64000180007',
          //     site_id: '高雄市鳥松區',
          //     village: '華美里',
          //     household_ordinary_total: '1125',
          //     household_business_total: '0',
          //     household_single_total: '509',
          //     household_ordinary_m: '1876',
          //     household_business_m: '0',
          //     household_single_m: '259',
          //     household_ordinary_f: '1918',
          //     household_business_f: '0',
          //     household_single_f: '250',
          //   },
          // ]
          updateValue?.({ chartData })
          updateValue?.({ isLoading: false })
        })
        .catch((err) => {
          console.error('fetchError: ', err)
          updateValue?.({ isLoading: false })
        })
    },
    [updateValue],
  )

  useEffect(() => {
    if (isDirty || !year.isValid || !county.isValid || !district.isValid) return

    handleFetchPopulationSurvey({
      year: year.value,
      county: county.value,
      district: district.value,
    })
  }, [
    isDirty,
    year.isValid,
    county.isValid,
    district.isValid,
    year.value,
    county.value,
    district.value,
    handleFetchPopulationSurvey,
  ])

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    const newUrl = `/${values.year}/${values.county}/${values.district}`
    const isUnChanged =
      year.value === values.year &&
      county.value === values.county &&
      district.value === values.district

    handleFetchPopulationSurvey(values, isUnChanged)
    navigate(newUrl, { replace: true })
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FormProvider {...method}>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <YearSelect />
        <CountySelect />
        <DistrictSelect />
        <SubmitButton />
      </FormContainer>
      <Charts />
    </FormProvider>
  )
}

export default Form
