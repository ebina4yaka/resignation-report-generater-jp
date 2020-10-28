import React from 'react'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import { createStyles, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DescriptionIcon from '@material-ui/icons/Description'

type Props = {
  headerTitle: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    icon: {
      marginRight: theme.spacing(2),
      marginTop: theme.spacing(0.4),
    },
    title: {
      flexGrow: 1,
    },
  })
)

export default function Header(props: Props): React.ReactElement {
  const { headerTitle } = props
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="relative">
        <Toolbar>
          <div className={classes.icon}>
            <DescriptionIcon />
          </div>
          <Typography variant="h6" color="inherit" className={classes.title}>
            {headerTitle}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
