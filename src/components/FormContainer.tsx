import { ReactNode } from 'react'
import { Box } from '@mui/material'

type FormContainerProps = {
  children: ReactNode
}

function FormContainer({ children }: FormContainerProps) {
  return (
    <form>
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
        }}
        p={2}
        gap={2}
      >
        {children}
      </Box>
    </form>
  )
}

export default FormContainer
