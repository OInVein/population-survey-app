import { Box, Paper } from '@mui/material'
import { ReactNode } from 'react'
import { usePopulationSurveyContext } from '../context'

function ResultContainer({ children }: { children: ReactNode }) {
  const { isLoading } = usePopulationSurveyContext()

  return (
    <Paper
      sx={(theme) => ({
        width: {
          xs: '100%',
          md: theme.spacing(91),
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

        '@keyframes shine': {
          from: {
            boxShadow: 'none',
          },
          to: {
            boxShadow: `0 0 20px 2px ${theme.palette.primary.light}`,
          },
        },

        ':hover': {
          boxShadow: `0 0 20px 2px ${theme.palette.primary.light}`,

          ':after': {
            transform: 'scale(1.1)',
            textDecoration: 'underline',
          },
        },
      })}
    >
      <Box display="flex" flex={1}>
        {children}
      </Box>
    </Paper>
  )
}

export default ResultContainer
