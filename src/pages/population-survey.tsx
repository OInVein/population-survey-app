import { AppBar, Box, Button, Toolbar, IconButton, Typography } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'

function PopulationSurveyPage() {
  return (
    <Box bgcolor="background.paper" width={1} height={1}>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            👨‍🚀
          </Typography>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default PopulationSurveyPage
