import { SelectProps as MuiSelectProps } from '@mui/material'

type Item = {
  value: string
  title: string
}

type SelectProps = {
  id: string
  items: Item[]
  label: MuiSelectProps['label']
  disabled?: MuiSelectProps['disabled']
  defaultValue?: MuiSelectProps['defaultValue']
  placeholder?: MuiSelectProps['placeholder']
}

export type { Item, SelectProps }
