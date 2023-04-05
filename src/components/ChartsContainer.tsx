import { Box } from '@mui/material'
import { ChartsContainerProps } from './types'

function ChartsContainer({ children }: ChartsContainerProps) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      position="relative"
      sx={{ width: 1, height: 1, p: 2, pb: 4 }}
    >
      {children}
    </Box>
  )
}

export default ChartsContainer
