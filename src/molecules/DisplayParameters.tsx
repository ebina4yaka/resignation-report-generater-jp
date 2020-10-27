import React, { useContext } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import dayjs from 'dayjs'
import 'dayjs/locale/ja'
import { parametersContext } from '../context/useParameters'
import Parameters from '../atoms/Parameter'

const useStyles = makeStyles(
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  })
)

function convertDateToJapanFormat(dateString: string): string {
  dayjs.locale('ja')
  return dayjs(dateString).format('YYYY年MM月DD日 dddd')
}

export default function DisplayParameters(): React.ReactElement {
  const context = useContext(parametersContext)
  const {
    name,
    companyName,
    dateOfRetirement,
    reason,
    daysOfPaidLeaveRemaining,
  } = context
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Parameters name="退職者" value={name} />
      <Parameters name="会社名" value={companyName} />
      <Parameters
        name="退職日"
        value={convertDateToJapanFormat(dateOfRetirement)}
      />
      <Parameters name="退職理由" value={reason} />
      <Parameters
        name="残有給休暇日数"
        value={String(daysOfPaidLeaveRemaining)}
      />
    </div>
  )
}
