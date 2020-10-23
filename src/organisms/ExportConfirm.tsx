import React from 'react'
import { Container } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ExportButtons from '../molecules/ExportButtons'
import ViewParameters from '../molecules/ViewParameters'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    buttonArea: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  })
)

export default function ExportConfig(): React.ReactElement {
  const classes = useStyles()
  return (
    <Container className={classes.root} maxWidth="sm">
      <ViewParameters />
      <ExportButtons />
    </Container>
  )
}
