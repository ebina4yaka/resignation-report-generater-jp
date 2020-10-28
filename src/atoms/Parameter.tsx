import React from 'react'
import Typography from '@material-ui/core/Typography'

type Props = {
  name: string
  value: string
}

export default function Parameters(props: Props): React.ReactElement {
  const { name, value } = props
  return (
    <div>
      <Typography variant="h6">{name}</Typography>
      <Typography variant="body1" gutterBottom>
        {value}
      </Typography>
    </div>
  )
}
