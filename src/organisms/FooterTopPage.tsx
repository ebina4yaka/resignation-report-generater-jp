import React from 'react'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Container from '@material-ui/core/Container'
import Copyright from '../atoms/Copyright'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
  },
}))

export default function FooterTopPage(): React.ReactElement {
  const classes = useStyles()
  return (
    <footer className={classes.root}>
      <Container maxWidth="sm">
        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Released under the MIT License.
        </Typography>
        <Copyright />
      </Container>
    </footer>
  )
}