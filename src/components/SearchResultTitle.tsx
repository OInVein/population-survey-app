import { Typography } from '@mui/material'
import { usePopulationSurveyContext } from '../context'

function SearchResultTitle() {
  const { isLoading, chartData } = usePopulationSurveyContext()
  return (
    <Typography
      color="text.primary"
      position="absolute"
      variant="h4"
      zIndex={1}
      sx={(theme) => ({
        transition: 'all .3s',
        top: theme.spacing(0),
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
      {isLoading
        ? '搜尋中'
        : `${chartData ? '搜尋結果' : ''}${
            chartData && chartData.length === 0 ? ' - 查無資料' : ''
          }`}
    </Typography>
  )
}

export default SearchResultTitle
