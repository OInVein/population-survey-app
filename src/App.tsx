import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ColorModeProvider } from './context'
import './styles/default.css'

const PopulationSurveyPage = lazy(() => import('./pages/population-survey'))
const ErrorBoundaryPage = lazy(() => import('./pages/error-boundary'))

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
    <ColorModeProvider>
      <RouterProvider router={router} />
    </ColorModeProvider>
  )
}

export default App
