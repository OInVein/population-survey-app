import { IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'

function SettingIcon() {
  return (
    <IconButton>
      <SettingsIcon
        sx={(theme) => ({
          border: '1px solid',
          borderRadius: theme.spacing(2),
        })}
      />
    </IconButton>
  )
}

export default SettingIcon
