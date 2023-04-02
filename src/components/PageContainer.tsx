import { ReactNode } from 'react'
import { Container, Box } from '@mui/material'

type ContainerProps = {
  children: ReactNode
}

function PageContainer({ children }: ContainerProps) {
  return (
    <Container sx={{ height: '100vh' }} maxWidth={false} disableGutters>
      <Box bgcolor="background.paper" height={1} display="flex" flexDirection="column">
        {children}
      </Box>
    </Container>
  )
}

export default PageContainer
