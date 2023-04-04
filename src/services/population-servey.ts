import { FormValues } from '../components/types'

const fetchPopulationSurvey = ({ year, county, district }: FormValues) =>
  fetch(
    `https://www.ris.gov.tw/rs-opendata/api/v1/datastore/ODRP019/${year}?COUNTY=${county}&TOWN=${district}`,
  ).then((res) => res.json())

export { fetchPopulationSurvey }
