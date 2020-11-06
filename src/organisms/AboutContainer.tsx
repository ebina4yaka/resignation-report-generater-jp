import React from 'react'
import Container from '@material-ui/core/Container'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import AboutParameters from './AboutParameters'
import AboutUse from './AboutUse'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3, 0, 2),
      flexDirection: 'column',
      justifyContent: 'center',
    },
    content: {
      padding: theme.spacing(2.5, 6, 3),
      margin: theme.spacing(2, 4, 2),
    },
  })
)

export default function AboutContainer(): React.ReactElement {
  const classes = useStyles()
  return (
    <Container className={classes.root} maxWidth="md">
      <Paper className={classes.content}>
        <AboutUse />
      </Paper>
      <Paper className={classes.content}>
        <AboutParameters />
      </Paper>
    </Container>
  )
}
