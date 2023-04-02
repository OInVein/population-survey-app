import {
  FormControl,
  MenuItem,
  InputLabel,
  Select as MuiSelect,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { SelectProps } from '../types'

function Select({ id, label, placeholder, defaultValue, items }: SelectProps) {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  return (
    <FormControl color="primary" size={matches ? 'small' : 'medium'}>
      <InputLabel shrink>{label}</InputLabel>
      <MuiSelect
        id={id}
        label={label}
        defaultValue={defaultValue}
        placeholder={placeholder}
        sx={{
          [theme.breakpoints.up('xs')]: {
            height: theme.spacing(7),
          },
          [theme.breakpoints.up('md')]: {
            height: theme.spacing(5),
          },
        }}
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
