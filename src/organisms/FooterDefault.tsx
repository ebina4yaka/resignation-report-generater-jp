import React from 'react'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Copyright from '../atoms/Copyright'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}))

export default function FooterDefault(): React.ReactElement {
  const classes = useStyles()
  return (
    <footer className={classes.root}>
      <Typography variant="h6" align="center" gutterBottom>
        退職届ジェネレーター
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Released under the MIT License.
      </Typography>
      <Copyright />
    </footer>
  )
}
