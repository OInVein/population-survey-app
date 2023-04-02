import { Button } from '@mui/material'

function SubmitButton() {
  return (
    <Button
      type="submit"
      sx={(theme) => ({
        [theme.breakpoints.up('md')]: {
          height: theme.spacing(5),
        },
        [theme.breakpoints.up('xs')]: {
          height: theme.spacing(7),
        },
      })}
      variant="contained"
    >
      Submit
    </Button>
  )
}

export default SubmitButton
