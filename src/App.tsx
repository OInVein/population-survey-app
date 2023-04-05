import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PopulationSurveyPage, ErrorBoundaryPage } from './pages'
import './styles/default.css'
import { ColorModeProvider } from './context'

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
