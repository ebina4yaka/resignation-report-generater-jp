import React from 'react'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'
import MuiLink from '@material-ui/core/Link'
import Link from 'next/link'
import { createStyles } from '@material-ui/core'
import Copyright from '../atoms/Copyright'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
    link: {
      color: 'white',
    },
  })
)

export default function FooterDefault(): React.ReactElement {
  const classes = useStyles()
  return (
    <footer className={classes.root}>
      <Typography variant="h6" align="center" gutterBottom>
        <Link href="/" passHref>
          <MuiLink color="inherit">退職届ジェネレーター</MuiLink>
        </Link>
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
