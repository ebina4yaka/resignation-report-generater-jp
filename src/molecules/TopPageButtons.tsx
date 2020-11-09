import React, { ReactElement } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import GitHubIcon from '@material-ui/icons/GitHub'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(4),
    },
  })
)

export default function TopPageButtons(): ReactElement {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item>
          <Link
            href="https://github.com/ebina4yaka/resignation-report-generater-jp"
            passHref
          >
            <Button
              variant="contained"
              color="default"
              startIcon={<GitHubIcon />}
            >
              source code
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}
