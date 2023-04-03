import { ReactNode } from 'react'
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select as MuiSelect,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { SelectProps } from '../types'

function Select({ id, label, placeholder, defaultValue, items, disabled = false }: SelectProps) {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const { control } = useFormContext()

  return (
    <FormControl color="primary" size={matches ? 'small' : 'medium'}>
      <InputLabel shrink>{label}</InputLabel>
      <Controller
        name={id}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <MuiSelect
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...field}
            label={label}
            disabled={disabled}
            displayEmpty={Boolean(placeholder)}
            renderValue={(selected) =>
              !selected ? <em>{placeholder}</em> : (selected as ReactNode)
            }
            sx={{
              [theme.breakpoints.up('xs')]: {
                height: theme.spacing(7),
              },
              [theme.breakpoints.up('md')]: {
                minWidth: theme.spacing(24),
                height: theme.spacing(5),
              },
            }}
          >
            {placeholder && (
              <MenuItem disabled value="">
                <em>{placeholder}</em>
              </MenuItem>
            )}
            {items.map(({ value, title }) => (
              <MenuItem key={value} value={value}>
                {title}
              </MenuItem>
            ))}
          </MuiSelect>
        )}
      />
    </FormControl>
  )
}

export default Select
