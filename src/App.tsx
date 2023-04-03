import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { PopulationSurveyPage, ErrorBoundaryPage } from './pages'
import { theme } from './theme'
import './styles/default.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PopulationSurveyPage />,
    errorElement: <ErrorBoundaryPage />,
  },
  {
    path: '/:id/:category/:subcategory',
    element: <PopulationSurveyPage />,
    errorElement: <ErrorBoundaryPage />,
  },
])

function App() {
  return (
    <>
      <CssBaseline enableColorScheme />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  )
}

export default App
