import { IconButton } from '@mui/material'
import { LightMode, DarkMode } from '@mui/icons-material'
import { useColorMode, usePopulationSurveyContext } from '../context'

const icons = {
  light: () => <DarkMode />,
  dark: () => <LightMode />,
}

function ModeIcon() {
  const { isLoading } = usePopulationSurveyContext()
  const { toggleColorMode, mode } = useColorMode()

  return (
    <IconButton
      sx={(theme) => ({
        ':hover': {
          border: '1px solid',

          '> :first-of-type': {
            borderRadius: theme.spacing(2),
          },
        },
      })}
      onClick={() => toggleColorMode()}
      disabled={isLoading}
    >
      {icons[mode]()}
    </IconButton>
  )
}

export default ModeIcon
