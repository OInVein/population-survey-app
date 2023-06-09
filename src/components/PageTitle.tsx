import { Box, Typography } from '@mui/material'

function PageTitle() {
  return (
    <Box width={1} display="flex" justifyContent="center" p={1}>
      <Typography variant="h3" color="text.primary">
        人口數、戶數按戶別及性別統計
      </Typography>
    </Box>
  )
}

export default PageTitle
