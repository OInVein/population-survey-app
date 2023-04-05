import { FormValues } from '../components/types'

type PopulationSurvey = {
  /**
   * 統計年
   */
  statistic_yyy: string
  /**
   * 區域別代碼
   */
  district_code: string
  /**
   * 區域別
   */
  site_id: string
  /**
   * 村里名稱
   */
  village: string
  /**
   * 共同生活戶_戶數
   */
  household_ordinary_total: string
  /**
   * 共同事業戶_戶數
   */
  household_business_total: string
  /**
   * 單獨生活戶_戶數
   */
  household_single_total: string
  /**
   * 共同生活戶_男
   */
  household_ordinary_m: string
  /**
   * 共同事業戶_男
   */
  household_business_m: string
  /**
   * 單獨生活戶_男
   */
  household_single_m: string
  /**
   * 共同生活戶_女
   */
  household_ordinary_f: string
  /**
   * 共同事業戶_女
   */
  household_business_f: string
  /**
   * 單獨生活戶_女
   */
  household_single_f: string
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

export type { PopulationSurvey }
export { fetchPopulationSurvey }
