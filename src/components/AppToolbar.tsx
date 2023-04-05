import { AppBar, Toolbar } from '@mui/material'
import Logo from './Logo'
import ModeIcon from './ModeIcon'

function AppToolbar() {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Logo />
        <ModeIcon />
      </Toolbar>
    </AppBar>
  )
}

export default AppToolbar
