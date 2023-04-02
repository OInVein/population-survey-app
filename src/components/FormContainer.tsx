import { ReactNode } from 'react'
import { Box } from '@mui/material'

type FormContainerProps = {
  children: ReactNode
}

function FormContainer({ children }: FormContainerProps) {
  return (
    <Box display="flex" flexDirection="column" p={2} gap={2}>
      {children}
    </Box>
  )
}

export default FormContainer
