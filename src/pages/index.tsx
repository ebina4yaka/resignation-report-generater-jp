import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Hero from '../organisms/Hero'
import FooterTopPage from '../organisms/FooterTopPage'

const useStyles = makeStyles(
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
  })
)

export default function Index(): React.ReactElement {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Hero />
      <FooterTopPage />
    </div>
  )
}
