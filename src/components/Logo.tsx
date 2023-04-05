import { Typography } from '@mui/material'

function Logo() {
  return (
    <Typography
      variant="h3"
      display="inline-block"
      component="a"
      target="_blank"
      href="https://github.com/OInVein"
      sx={(theme) => ({
        cursor: 'pointer',
        transition: 'all .1s',
        borderRadius: theme.spacing(2),

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
