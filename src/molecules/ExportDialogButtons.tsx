import React, { useContext } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import dayjs from 'dayjs'
import exportDocx from '../libs/export/exportDocx'
import { ExportParameters } from '../libs/export/ExportParameters'
import { parametersContext } from '../context/useParameters'
import convertDateStringToJapanFormat from '../libs/convertDateStringToJapanFormat'
import calcDateOfRetirement from '../libs/calcDateOfRetirement'

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
      width: '14ch',
      margin: theme.spacing(2),
    },
  })
)

export default function ExportDialogButtons(props: Props): React.ReactElement {
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
  } = context

  const exportParameters: ExportParameters = {
    name,
    companyName,
    department,
    representativeDirector,
    dateOfNotification: convertDateStringToJapanFormat(dateOfNotification),
    dateOfRetirement: convertDateStringToJapanFormat(
      calcDateOfRetirement(dateOfNotification, daysOfPaidLeaveRemaining)
    ),
    endDateOfPaidLeave: convertDateStringToJapanFormat(
      dayjs(dateOfNotification)
        .add(daysOfPaidLeaveRemaining, 'day')
        .format('YYYY-MM-DD')
    ),
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
        onClick={() => exportDocx(exportParameters)}
      >
        WORD出力
      </Button>
    </div>
  )
}
