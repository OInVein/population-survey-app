import { Box, Typography } from '@mui/material'

function PageTitle() {
  return (
    <Box width={1} display="flex" justifyContent="center" p={2}>
      <Typography variant="h3" color="common.white">
        人口數、戶數按戶別及性別統計
      </Typography>
    </Box>
  )
}

export default PageTitle
