import { Box, Paper, Typography } from '@mui/material'
import { usePopulationSurveyContext } from '../context'
import ChartsLoading from './ChartsLoading'

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
          top: theme.spacing(0.5),
          transform: isLoading ? 'scale(1.2)' : null,
          boxShadow: isLoading ? `0 0 20px 2px ${theme.palette.primary.light}` : null,
          backgroundColor: isLoading ? theme.palette.primary.main : null,
          borderRadius: isLoading ? theme.spacing(2) : null,
          padding: isLoading ? theme.spacing(1) : null,

          ':after': {
            content: isLoading ? '"🚀"' : null,
          },
        })}
      >
        {isLoading ? '搜尋中' : '搜尋結果'}
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
        <Box display="flex" flex={1}>
          <ChartsLoading />
        </Box>
      </Paper>
    </Box>
  )
}

export default Charts
