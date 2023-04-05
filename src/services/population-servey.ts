import { FormValues } from '../components/types'

// type FetchPupulationSurvey = (value: FormValues) => {
//   district_code: string
//   household_business_f: string
//   household_business_m: string
//   household_business_total: string
//   household_ordinary_f: string
//   household_ordinary_m: string
//   household_ordinary_total: string
//   household_single_f: string
//   household_single_m: string
//   household_single_total: string
//   site_id: string
//   statistic_yyy: string
//   village: string
// }

const fetchPopulationSurvey = ({ year, county, district }: FormValues) =>
  fetch(
    `https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${year}?COUNTY=${county}&TOWN=${district}`,
  ).then((res) => res.json())

export { fetchPopulationSurvey }
