import { IconButton, SxProps, Theme } from '@mui/material'
import { LightMode, DarkMode } from '@mui/icons-material'
import { useColorMode, usePopulationSurveyContext } from '../context'

const sx: SxProps<Theme> = (theme) => ({
  border: '1px solid',
  borderRadius: theme.spacing(2),
})

const icons = {
  light: () => <DarkMode sx={sx} />,
  dark: () => <LightMode sx={sx} />,
}

function ModeIcon() {
  const { isLoading } = usePopulationSurveyContext()
  const { toggleColorMode, mode } = useColorMode()

  return (
    <IconButton onClick={() => toggleColorMode()} disabled={isLoading}>
      {icons[mode]()}
    </IconButton>
  )
}

export default ModeIcon
