import { ReactElement } from 'react'
import { Container } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ParametersField from '../molecules/ParametersField'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  })
)

export default function ExportConfig(): ReactElement {
  const classes = useStyles()
  return (
    <Container className={classes.root} maxWidth="sm">
      <ParametersField />
    </Container>
  )
}
