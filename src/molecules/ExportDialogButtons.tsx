import React, { useContext } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import clsx from 'clsx'
import exportDocx from '../libs/export/exportDocx'
import { ExportParameters } from '../libs/export/exportParameters'
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
    margin: {
      margin: theme.spacing(2),
    },
    button: {
      width: '14ch',
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
    dateOfRetirement,
    reason,
    daysOfPaidLeaveRemaining,
  } = context

  const exportParameters: ExportParameters = {
    name,
    companyName,
    dateOfRetirement: convertDateStringToJapanFormat(dateOfRetirement),
    reason,
    daysOfPaidLeaveRemaining,
  }
  return (
    <div className={classes.root}>
      <Button
        className={clsx(classes.margin, classes.button)}
        variant="contained"
        color="secondary"
        onClick={handleClose}
      >
        入力へ戻る
      </Button>
      <Button
        className={clsx(classes.margin, classes.button)}
        variant="contained"
        color="primary"
        onClick={() => exportDocx(exportParameters)}
      >
        WORD出力
      </Button>
      <Button
        className={clsx(classes.margin, classes.button)}
        variant="contained"
        color="primary"
        onClick={handleClose}
      >
        PDF出力
      </Button>
    </div>
  )
}
