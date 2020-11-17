import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      width: '30ch',
      margin: theme.spacing(1),
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  })
)
