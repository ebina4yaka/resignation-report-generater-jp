import { ReactElement } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

type Props = {
  text: string
  isDisable: boolean
  onClickFunction: () => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: '10ch',
      marginBottom: theme.spacing(3),
    },
  })
)

export default function ConfirmButton(props: Props): ReactElement {
  const { text, isDisable, onClickFunction } = props
  const classes = useStyles()

  const renderButton = (): ReactElement => {
    if (isDisable) {
      return (
        <Button
          disabled
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={onClickFunction}
        >
          {text}
        </Button>
      )
    }
    return (
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={onClickFunction}
      >
        {text}
      </Button>
    )
  }

  return renderButton()
}
