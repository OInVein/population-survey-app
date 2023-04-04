import { Typography } from '@mui/material'
import { usePopulationSurveyContext } from '../context'

function ChartsTitle() {
  const { isLoading } = usePopulationSurveyContext()

  return (
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
  )
}

export default ChartsTitle
