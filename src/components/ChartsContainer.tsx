import { Box, Paper } from '@mui/material'
import { usePopulationSurveyContext } from '../context'
import { ChartsContainerProps } from './types'

function ChartsContainer({ children }: ChartsContainerProps) {
  const { isLoading } = usePopulationSurveyContext()
  return (
    <Paper
      elevation={0}
      sx={(theme) => ({
        '@keyframes shine': {
          from: {
            boxShadow: 'none',
          },
          to: {
            boxShadow: `0 0 20px 2px ${theme.palette.primary.light}`,
          },
        },

        width: {
          xs: '100%',
          md: theme.spacing(88),
        },
        height: 1,
        borderRadius: theme.spacing(2),
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        transition: 'all .1s',
        pt: theme.spacing(2),
        overflow: 'hidden',
        animation: isLoading ? 'shine 3s infinite linear alternate-reverse' : 'none',
      })}
    >
      <Box display="flex" flex={1}>
        {children}
      </Box>
    </Paper>
  )
}

export default ChartsContainer
