import { SelectProps as MuiSelectProps } from '@mui/material'

export type Item = {
  value: string
  title: string
}

export type SelectProps = {
  id: string
  items: Item[]
  label: MuiSelectProps['label']
  defaultValue?: MuiSelectProps['defaultValue']
  placeholder?: MuiSelectProps['placeholder']
}
