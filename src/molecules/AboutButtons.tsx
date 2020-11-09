import { ReactElement } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: theme.spacing(0, 0, 4),
    },
    button: {
      margin: theme.spacing(0, 2, 0),
      width: '20ch',
    },
  })
)

export default function AboutButtons(): ReactElement {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item>
          <Link href="/create" passHref>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              退職届を作成する
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}
