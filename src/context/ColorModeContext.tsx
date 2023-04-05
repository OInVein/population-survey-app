import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from '@mui/material'
import { ReactNode, createContext, useContext, useMemo, useState } from 'react'
import { themes } from '../theme'

type ColorModeContextType = {
  mode: PaletteMode
  toggleColorMode: () => void
}

const initialState: ColorModeContextType = {
  mode: (localStorage.getItem('theme') as PaletteMode) || 'dark',
  toggleColorMode() {},
}
const ColorModeContext = createContext<ColorModeContextType>(initialState)
const { Provider } = ColorModeContext
const useColorMode = () => useContext(ColorModeContext)

function ColorModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<PaletteMode>(
    (localStorage.getItem('theme') as PaletteMode) || 'dark',
  )
  const theme = useMemo(() => responsiveFontSizes(createTheme(themes[mode])), [mode])
  const providerValue = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prev) => {
          const newMode = prev === 'light' ? 'dark' : 'light'

          localStorage.setItem('theme', newMode)
          return newMode
        })
      },
    }),
    [mode],
  )

  return (
    <Provider value={providerValue}>
      <CssBaseline enableColorScheme />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  )
}

export { ColorModeProvider, useColorMode }
