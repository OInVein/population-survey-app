import { Box, Paper, LinearProgress, Typography } from '@mui/material'
import { usePopulationSurveyContext } from '../context'

function Loading() {
  const { isLoading } = usePopulationSurveyContext()

  return (
    <Box display={isLoading ? 'block' : 'none'}>
      <LinearProgress
        variant="determinate"
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
          top: theme.spacing(-1.8),
          borderRadius: theme.spacing(2),
          opacity: 0.7,
        })}
      />
    </Box>
  )
}

function Charts() {
  const { isLoading } = usePopulationSurveyContext()

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      position="relative"
      sx={{ width: 1, height: 1, p: 2, pb: 4 }}
    >
      <Typography
        color="text.primary"
        position="absolute"
        variant="h4"
        zIndex={1}
        sx={(theme) => ({
          transition: 'all .3s',
          top: theme.spacing(0.8),
          transform: isLoading ? 'scale(1.2)' : null,
          boxShadow: isLoading ? `0 0 20px 2px ${theme.palette.primary.light}` : null,
          backgroundColor: isLoading ? theme.palette.primary.main : null,
          borderRadius: isLoading ? theme.spacing(2) : null,
          padding: isLoading ? theme.spacing(1) : null,
        })}
      >
        {isLoading ? '搜尋中 🚀' : '搜尋結果'}
      </Typography>
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
        <Box flex={1}>
          <Loading />
        </Box>
      </Paper>
    </Box>
  )
}

export default Charts
