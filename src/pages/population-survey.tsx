import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import { PageContainer, PageTitle, Form } from '../components'

function PopulationSurveyPage() {
  return (
    <PageContainer>
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
      <Form />
    </PageContainer>
  )
}

export default PopulationSurveyPage
