import { Button } from '@mui/material'

function SubmitButton() {
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
    >
      Submit
    </Button>
  )
}

export default SubmitButton
