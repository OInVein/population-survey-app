import { Box, Paper } from '@mui/material'

function Charts() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ width: 1, height: 1, p: 2, pb: 4 }}
    >
      <Paper
        sx={(theme) => ({
          width: theme.spacing(91),
          height: 1,
          borderRadius: theme.spacing(2),

          ':hover': {
            boxShadow: `0 0 20px 2px ${theme.palette.primary.light}`,
          },
        })}
      />
    </Box>
  )
}

export default Charts
