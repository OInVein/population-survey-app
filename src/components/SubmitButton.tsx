import { Button } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { FormValues } from './types'

function SubmitButton() {
  const { watch } = useFormContext<FormValues>()
  const disabled = watch(['year', 'county', 'distinct']).some((value) => !value)

  return (
    <Button
      type="submit"
      variant="contained"
      size="large"
      sx={(theme) => ({
        [theme.breakpoints.up('md')]: {
          height: theme.spacing(5),
        },
        [theme.breakpoints.up('xs')]: {
          height: theme.spacing(7),
        },
      })}
      disabled={disabled}
    >
      Submit
    </Button>
  )
}

export default SubmitButton
