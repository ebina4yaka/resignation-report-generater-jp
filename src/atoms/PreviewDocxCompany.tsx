import { ReactElement } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import {
  getCompanyName,
  getRepresentativeDirector,
} from '../libs/export/textTemplates'

type Props = {
  companyName: string
  representativeDirector: string
}

const useStyles = makeStyles(
  createStyles({
    root: {
      textAlign: 'left',
    },
  })
)

export default function PreviewDocxCompany(props: Props): ReactElement {
  const { companyName, representativeDirector } = props
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div>{getCompanyName(companyName)}</div>
      <div>{getRepresentativeDirector(representativeDirector)}</div>
    </div>
  )
}
