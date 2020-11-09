import { ReactElement, useContext } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import downloadResignationReport from '../libs/export/downloadResignationReport'
import { DocxParameters } from '../libs/export/DocxParameters'
import { parametersContext } from '../context/useParameters'
import convertDateStringToJapanFormat from '../libs/convertDateStringToJapanFormat'

type Props = {
  handleClose: () => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    button: {
      width: '15h',
      margin: theme.spacing(2),
    },
  })
)

export default function ExportDialogButtons(props: Props): ReactElement {
  const { handleClose } = props
  const classes = useStyles()
  const context = useContext(parametersContext)
  const {
    name,
    companyName,
    department,
    representativeDirector,
    dateOfNotification,
    reason,
    daysOfPaidLeaveRemaining,
    dateOfRetirement,
  } = context

  const docxParameters: DocxParameters = {
    name,
    companyName,
    department,
    representativeDirector,
    dateOfNotification: convertDateStringToJapanFormat(dateOfNotification),
    dateOfRetirement: convertDateStringToJapanFormat(dateOfRetirement),
    reason,
    daysOfPaidLeaveRemaining,
  }
  return (
    <div className={classes.root}>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={handleClose}
      >
        入力へ戻る
      </Button>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        onClick={() => downloadResignationReport(docxParameters)}
      >
        ダウンロード
      </Button>
    </div>
  )
}
