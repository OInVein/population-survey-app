import { useColorMode, usePopulationSurveyContext } from '../context'

const usePopulationOptions = () => {
  const { chartData } = usePopulationSurveyContext()
  const { mode } = useColorMode()
  const isDark = mode === 'dark'
  const householdOrdinaryMaleData =
    chartData?.reduce((acc, cur) => acc + Number(cur.household_ordinary_m), 0) || 0
  const householdOrdinaryFemaleData =
    chartData?.reduce((acc, cur) => acc + Number(cur.household_ordinary_f), 0) || 0
  const householdSingleMaleData =
    chartData?.reduce((acc, cur) => acc + Number(cur.household_single_m), 0) || 0
  const householdSingleFemaleData =
    chartData?.reduce((acc, cur) => acc + Number(cur.household_single_f), 0) || 0

  const populationOptions: Highcharts.Options = {
    chart: {
      type: 'column',
    },
    title: {
      text: '人口數統計',
    },
    xAxis: {
      title: {
        text: '型態',
      },
      categories: ['共同生活', '獨立生活'],
    },
    yAxis: {
      title: {
        text: '數量',
        align: 'high',
      },
    },
    series: [
      {
        name: '男性',
        type: 'column',
        color: isDark ? 'orangered' : 'cornflowerblue',
        data: [householdOrdinaryMaleData, householdOrdinaryFemaleData],
      },
      {
        name: '女性',
        type: 'column',
        color: isDark ? 'gold' : 'orange',
        data: [householdSingleMaleData, householdSingleFemaleData],
      },
    ],
  }

  return populationOptions
}

export default usePopulationOptions
