import { ReactElement } from 'react'
import Typography from '@material-ui/core/Typography'

type Props = {
  name: string
  description: string[]
}

export default function ParameterDescription(props: Props): ReactElement {
  const { name, description } = props
  return (
    <>
      <Typography>{name}</Typography>
      {description.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  )
}
