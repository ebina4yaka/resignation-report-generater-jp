import { ReactElement } from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(2),
    },
    button: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      width: '15ch',
    },
  })
)

export default function HeroButtons(): ReactElement {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Link href="/about" passHref>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
            >
              使い方
            </Button>
          </Link>
          <Link href="/create" passHref>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
            >
              作成する
            </Button>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}
