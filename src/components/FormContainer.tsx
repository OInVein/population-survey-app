import { Box } from '@mui/material'
import { FormContainerProps } from './types'

function FormContainer({ children, onSubmit }: FormContainerProps) {
  return (
    <form onSubmit={onSubmit}>
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
        }}
        p={1}
        gap={1}
      >
        {children}
      </Box>
    </form>
  )
}

export default FormContainer
