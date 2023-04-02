import { ReactNode } from 'react'
import { Container as MuiContainer, Box } from '@mui/material'

type ContainerProps = {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <MuiContainer sx={{ height: '100vh' }} maxWidth={false} disableGutters>
      <Box bgcolor="background.paper" height={1} display="flex" flexDirection="column">
        {children}
      </Box>
    </MuiContainer>
  )
}

export default Container
