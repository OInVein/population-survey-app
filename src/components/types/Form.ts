import { ReactNode } from 'react'

type FormValues = {
  year: string
  county: string
  district: string
}

type FormProps = {
  children: ReactNode
}

export type { FormValues, FormProps }
