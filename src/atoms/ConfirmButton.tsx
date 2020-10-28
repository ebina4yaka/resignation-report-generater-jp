import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import clsx from 'clsx'

type Props = {
  text: string
  isDisable: boolean
  onClickFunction: () => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(2),
    },
    button: {
      width: '10ch',
    },
  })
)

export default function ConfirmButton(props: Props): React.ReactElement {
  const { text, isDisable, onClickFunction } = props
  const classes = useStyles()

  const renderButton = (): React.ReactElement => {
    if (isDisable) {
      return (
        <Button
          disabled
          className={clsx(classes.margin, classes.button)}
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
        className={clsx(classes.margin, classes.button)}
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
