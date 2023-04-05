import { AppBar, Toolbar } from '@mui/material'
import Logo from './Logo'
import SettingIcon from './SettingIcon'

function AppToolbar() {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Logo />
        <SettingIcon />
      </Toolbar>
    </AppBar>
  )
}

export default AppToolbar
