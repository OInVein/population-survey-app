import { Box, Typography } from '@mui/material'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { usePopulationSurveyContext } from '../context'

const options = {
  title: {
    text: '人口數統計',
  },
  series: [
    {
      data: [1, 2, 3],
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
        <HighchartsReact highcharts={Highcharts} options={options} />
      ) : (
        <Typography variant="h1">👨‍🔬</Typography>
      )}
    </Box>
  )
}

export default ResultCharts
