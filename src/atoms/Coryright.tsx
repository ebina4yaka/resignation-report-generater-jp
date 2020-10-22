import React from 'react'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'

export default function Copyright(): React.ReactElement {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://github.com/ebina4yaka">
        ebina4yaka
      </MuiLink>
      {` ${new Date().getFullYear()}.`}
    </Typography>
  )
}
