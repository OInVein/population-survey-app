import { ReactNode, createContext, useCallback, useContext, useState } from 'react'

type PopulationSurveyContextType = {
  theme?: 'dark' | 'light'
  isLoading?: boolean
  chartData?: object[]
  updateValue?: (newValue: PopulationSurveyContextType) => void
}

const initialState: PopulationSurveyContextType = {
  theme: 'dark',
  isLoading: false,
  chartData: [],
  updateValue: () => {},
}
const PopulationSurveyContext = createContext<PopulationSurveyContextType>(initialState)
const { Provider } = PopulationSurveyContext
const usePopulationSurveyContext = () => useContext(PopulationSurveyContext)

function PopulationSurveyProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<PopulationSurveyContextType>(initialState)

  const updateValue = useCallback((newValue: Omit<PopulationSurveyContextType, 'updateValue'>) => {
    setValue((prev) => ({
      ...prev,
      ...newValue,
    }))
  }, [])

  return <Provider value={{ ...value, updateValue }}>{children}</Provider>
}

export type { PopulationSurveyContextType }
export { PopulationSurveyProvider, usePopulationSurveyContext }
