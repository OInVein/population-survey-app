import { FormControl, MenuItem, InputLabel, Select as MuiSelect } from '@mui/material'
import { SelectProps } from '../types'

function Select({ id, label, placeholder, defaultValue, items }: SelectProps) {
  return (
    <FormControl color="primary">
      <InputLabel shrink>{label}</InputLabel>
      <MuiSelect
        id={id}
        label={label}
        defaultValue={defaultValue}
        placeholder={placeholder}
        sx={(theme) => ({
          [theme.breakpoints.up('md')]: {
            height: theme.spacing(6),
          },
        })}
      >
        {items.map(({ value, title }) => (
          <MenuItem key={value} value={value}>
            {title}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}

export default Select
