import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import LinkButton from '../atoms/LinkButton'

const useStyles = makeStyles(
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  })
)

export default function ExportButtons(): React.ReactElement {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <LinkButton href="/" text="戻る" color="secondary" variant="contained" />
      <LinkButton href="" text="PDF出力" color="primary" variant="contained" />
      <LinkButton href="" text="WORD出力" color="primary" variant="contained" />
    </div>
  )
}
