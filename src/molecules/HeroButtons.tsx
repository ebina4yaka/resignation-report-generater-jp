import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
}))

export default function HeroButtons(): React.ReactElement {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Link href="/create" passHref>
            <Button variant="contained" color="primary">
              退職届を作成する
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}
