import React from 'react'
import Image from 'next/image'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import HeroButtons from '../molecules/HeroButtons'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(8, 0, 6),
    },
    contents: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    image: {
      margin: theme.spacing(2),
    },
  })
)

export default function Hero(): React.ReactElement {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <div className={classes.contents}>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            退職届ジェネレーター
          </Typography>
          <Typography
            component="h2"
            variant="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            内容証明郵便で叩きつけよう！
          </Typography>
          <div className={classes.image}>
            <Image src="/top.png" width={200} height={200} />
          </div>
          <HeroButtons />
        </div>
      </Container>
    </div>
  )
}