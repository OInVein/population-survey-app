import { ReactNode, FormEventHandler } from 'react'

export type FormContainerProps = {
  children: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement>
}
