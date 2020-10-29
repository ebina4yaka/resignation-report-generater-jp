import React, { useContext } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { parametersContext } from '../context/useParameters'
import Parameters from '../atoms/Parameter'
import convertDateStringToJapanFormat from '../libs/convertDateStringToJapanFormat'

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

export default function DisplayParameters(): React.ReactElement {
  const context = useContext(parametersContext)
  const {
    name,
    companyName,
    department,
    representativeDirector,
    dateOfRetirement,
    reason,
    daysOfPaidLeaveRemaining,
  } = context
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Parameters name="退職者" value={name} />
      <Parameters name="会社名" value={companyName} />
      <Parameters name="所属部署" value={department} />
      <Parameters name="代表取締役" value={representativeDirector} />
      <Parameters
        name="退職日"
        value={convertDateStringToJapanFormat(dateOfRetirement)}
      />
      <Parameters name="退職理由" value={reason} />
      <Parameters
        name="残有給休暇日数"
        value={String(daysOfPaidLeaveRemaining)}
      />
    </div>
  )
}
