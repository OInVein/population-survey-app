import { IconButton } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import { usePopulationSurveyContext } from '../context'

function SettingIcon() {
  const { isLoading } = usePopulationSurveyContext()
  return (
    <IconButton disabled={isLoading}>
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
