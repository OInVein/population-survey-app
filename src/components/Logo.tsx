import { Typography } from '@mui/material'
import { usePopulationSurveyContext } from '../context'

function Logo() {
  const { isLoading } = usePopulationSurveyContext()
  return (
    <Typography
      variant="h3"
      display="inline-block"
      component="a"
      target="_blank"
      href={isLoading ? undefined : 'https://github.com/OInVein'}
      sx={(theme) => ({
        cursor: isLoading ? 'not-allowed' : 'pointer',
        transition: 'all .3s',
        borderRadius: 16,

        ':after': {
          content: '"👨‍🚀"',
        },

        ':hover': {
          backgroundColor: 'transparent',
          boxShadow: `0 0 20px 2px ${theme.palette.primary.light}`,
          border: '1px solid',
          transform: 'scale(1.1)',

          ':after': {
            content: '"🦹"',
          },
        },
      })}
    />
  )
}

export default Logo
