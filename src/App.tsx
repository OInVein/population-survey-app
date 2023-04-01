import { CssBaseline, ThemeProvider } from '@mui/material'
import { PopulationSurveyPage } from './pages'
import theme from './theme/theme'

function App() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <ThemeProvider theme={theme}>
        <PopulationSurveyPage />
      </ThemeProvider>
    </>
  )
}

export default App
