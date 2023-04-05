import { Box, Typography } from '@mui/material'
import { usePopulationSurveyContext } from '../context'

function ResultCharts() {
  const { chartData } = usePopulationSurveyContext()
  const hasData = chartData && chartData.length > 0

  return (
    <Box width={1} height={1} display="flex" justifyContent="center" alignItems="center">
      {hasData ? <div>hasData</div> : <Typography variant="h1">👨‍🔬</Typography>}
    </Box>
  )
}

export default ResultCharts
