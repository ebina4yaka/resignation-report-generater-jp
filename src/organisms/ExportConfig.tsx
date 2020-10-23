import React from 'react'
import { Container } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import ParametersField from '../molecules/ParametersField'
import LinkButton from '../atoms/LinkButton'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    buttonArea: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  })
)

export default function ExportConfig(): React.ReactElement {
  const classes = useStyles()
  return (
    <Container className={classes.root} maxWidth="sm">
      <ParametersField />
      <div className={classes.buttonArea}>
        <LinkButton
          href="/confirm"
          text="確認画面へ"
          color="primary"
          variant="contained"
        />
      </div>
    </Container>
  )
}
