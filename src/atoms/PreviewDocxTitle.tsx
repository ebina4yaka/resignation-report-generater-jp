import React, { ReactElement } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(
  createStyles({
    root: {
      textAlign: 'center',
    },
  })
)

export default function PreviewDocxTitle(): ReactElement {
  const classes = useStyles()
  return <div className={classes.root}>退職届</div>
}
