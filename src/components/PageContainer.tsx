import { Container, Box } from '@mui/material'
import { usePopulationSurveyContext } from '../context'
import { PageContainerProps } from './types'

function PageContainer({ children }: PageContainerProps) {
  const { isLoading } = usePopulationSurveyContext()
  return (
    <Container
      sx={{ height: '100vh', cursor: isLoading ? 'wait' : null }}
      maxWidth={false}
      disableGutters
    >
      <Box bgcolor="background.paper" height={1} display="flex" flexDirection="column">
        {children}
      </Box>
    </Container>
  )
}

export default PageContainer
