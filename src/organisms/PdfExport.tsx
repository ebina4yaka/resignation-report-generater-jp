import React from 'react'
import { Container } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ExportParameters from '../molecules/ExportParameters'
import ExportButtons from '../molecules/ExportButtons'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  })
)

export default function PdfExport(): React.ReactElement {
  const classes = useStyles()
  return (
    <Container className={classes.root} maxWidth="sm">
      <ExportParameters />
      <ExportButtons />
    </Container>
  )
}
