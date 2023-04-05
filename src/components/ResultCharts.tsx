import { Box, Typography } from '@mui/material'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { usePopulationSurveyContext } from '../context'

const populationOptions: Highcharts.Options = {
  chart: {
    type: 'column',
  },
  title: {
    text: '人口數統計',
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  yAxis: {
    title: {
      text: 'Sales',
    },
  },
  series: [
    {
      name: 'Sales',
      type: 'column',
      data: [15000, 20000, 30000, 25000, 28000, 35000, 45000, 40000, 38000, 42000, 50000, 55000],
    },
  ],
}

function ResultCharts() {
  const { chartData } = usePopulationSurveyContext()
  const hasData = chartData && chartData.length > 0
  console.log('chartData: ', chartData)

  return (
    <Box width={1} height={1} display="flex" justifyContent="center" alignItems="center">
      {hasData ? (
        <HighchartsReact highcharts={Highcharts} options={populationOptions} />
      ) : (
        <Typography variant="h1">👨‍🔬</Typography>
      )}
    </Box>
  )
}

export default ResultCharts
