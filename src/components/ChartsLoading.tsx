import { Box, LinearProgress, Skeleton } from '@mui/material'
import { usePopulationSurveyContext } from '../context'

function ChartsLoading() {
  const { isLoading } = usePopulationSurveyContext()

  return (
    <Box display={isLoading ? 'block' : 'none'} position="relative" flex={1}>
      <LinearProgress
        variant="determinate"
        value={100}
        sx={(theme) => ({
          position: 'relative',
          top: theme.spacing(-2),
          borderRadius: theme.spacing(2),
          opacity: 0.7,
        })}
      />
      <LinearProgress
        color="secondary"
        sx={(theme) => ({
          position: 'relative',
          top: theme.spacing(-1.75),
          borderRadius: theme.spacing(2),
          opacity: 0.5,
        })}
      />
      <LinearProgress
        color="secondary"
        sx={(theme) => ({
          position: 'relative',
          top: theme.spacing(-1.5),
          borderRadius: theme.spacing(2),
          opacity: 0.5,
        })}
      />
      <Skeleton
        variant="rectangular"
        sx={{ position: 'absolute', height: 1, top: 0, left: 0, bottom: 0, right: 0 }}
      />
    </Box>
  )
}

export default ChartsLoading
