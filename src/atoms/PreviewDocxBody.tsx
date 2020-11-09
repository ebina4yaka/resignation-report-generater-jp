import React, { ReactElement } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { getReason, requestTicket } from '../libs/export/textTemplates'

type Props = {
  reason: string
  dateOfRetirement: string
}

const useStyles = makeStyles(
  createStyles({
    root: {
      textAlign: 'left',
    },
  })
)

export default function PreviewDocxBody(props: Props): ReactElement {
  const { reason, dateOfRetirement } = props
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>{getReason(reason, dateOfRetirement)}</div>
      <div>{requestTicket}</div>
    </div>
  )
}
