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
          '> :first-of-type': {
            border: '1px solid',
            borderRadius: theme.spacing(2),
            backgroundColor: theme.palette.primary.main,
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
