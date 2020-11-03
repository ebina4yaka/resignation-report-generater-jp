import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'

type Props = {
  dateOfNotification: string
  department: string
  name: string
}

const useStyles = makeStyles(
  createStyles({
    root: {
      textAlign: 'left',
    },
  })
)

export default function PreviewDocxBottom(props: Props): React.ReactElement {
  const { dateOfNotification, department, name } = props
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>{dateOfNotification}</div>
      <div>{department}</div>
      <div>{name}</div>
    </div>
  )
}
