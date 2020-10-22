import React from 'react'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    margin: {
      margin: theme.spacing(3),
    },
    button: {
      width: '14ch',
    },
  })
)

export default function ExportButtons(): React.ReactElement {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Button
        className={clsx(classes.margin, classes.button)}
        variant="contained"
        color="secondary"
      >
        PDF出力
      </Button>
      <Button
        className={clsx(classes.margin, classes.button)}
        variant="contained"
        color="secondary"
      >
        Word出力
      </Button>
    </div>
  )
}
