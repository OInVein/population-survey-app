import { Box } from '@mui/material'
import * as Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { usePopulationSurveyContext } from '../context'
import { usePopulationOptions } from '../hooks'

function ResultCharts() {
  const { chartData } = usePopulationSurveyContext()
  const populationOptions = usePopulationOptions()
  const hasData = chartData && chartData.length > 0

  return (
    <Box width={1} height={1} display="flex" justifyContent="center" alignItems="center">
      {hasData && (
        <HighchartsReact
          highcharts={Highcharts}
          options={populationOptions}
          containerProps={{ style: { width: '100%', height: '100%' } }}
        />
      )}
    </Box>
  )
}

export default ResultCharts
