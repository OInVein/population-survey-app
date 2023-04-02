import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import { Container } from '../components'

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
    </Container>
  )
}

export default PopulationSurveyPage
