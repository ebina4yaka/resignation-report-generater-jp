import { ReactElement } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

type Props = {
  name: string
  description: string[]
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2, 0, 2),
    },
  })
)

export default function ParameterDescription(props: Props): ReactElement {
  const { name, description } = props
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography>{name}</Typography>
      {description.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  )
}
