import { FormValues } from '../components/types'

type PopulationSurvey = {
  district_code: string
  household_business_f: string
  household_business_m: string
  household_business_total: string
  household_ordinary_f: string
  household_ordinary_m: string
  household_ordinary_total: string
  household_single_f: string
  household_single_m: string
  household_single_total: string
  site_id: string
  statistic_yyy: string
  village: string
}

type PopulationSurveyResponse = {
  page: string
  pageDataSize: string
  responseCode: string
  responseData: PopulationSurvey[]
  responseMessage: string
  totalDataSize: string
  totalPage: string
}

const fetchPopulationSurvey = async ({
  year,
  county,
  district,
}: FormValues): Promise<PopulationSurvey[]> => {
  const res = await fetch(
    `https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${year}?COUNTY=${county}&TOWN=${district}`,
  )
  const { responseData } = <PopulationSurveyResponse>await res.json()

  return responseData
}

export { fetchPopulationSurvey }
