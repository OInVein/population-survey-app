import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import {
  Container,
  YearSelect,
  CountySelect,
  DistrictSelect,
  SubmitButton,
  PageTitle,
} from '../components'

function PopulationSurveyPage() {
  return (
    <Container>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            👨‍🚀
          </Typography>
          <IconButton>
            <SettingsIcon
              sx={(theme) => ({
                border: '1px solid',
                borderRadius: theme.spacing(2),
              })}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <PageTitle />
      <Box display="flex" flexDirection="column" p={2} gap={2}>
        <YearSelect />
        <CountySelect />
        <DistrictSelect />
        <SubmitButton />
      </Box>
    </Container>
  )
}

export default PopulationSurveyPage
