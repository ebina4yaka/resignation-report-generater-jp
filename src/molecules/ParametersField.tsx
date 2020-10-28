import React, { ChangeEvent, useContext } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'
import { parametersContext } from '../context/useParameters'
import removeNonNumberFromString from '../libs/removeNonNumberFromString'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    margin: {
      margin: theme.spacing(1),
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    textField: {
      width: '30ch',
    },
  })
)

export default function ParametersField(): React.ReactElement {
  const context = useContext(parametersContext)
  const {
    name,
    companyName,
    dateOfRetirement,
    reason,
    daysOfPaidLeaveRemaining,
  } = context
  const classes = useStyles()

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    context.setName(target.value)
  }

  const handleChangeCompanyName = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    context.setCompanyName(target.value)
  }

  const handleChangeDateOfRetirement = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { target } = event
    context.setDateOfRetirement(target.value)
  }

  const handleChangeReason = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    context.setReason(target.value)
  }

  const handleChangeDaysOfPaidLeaveRemaining = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { target } = event
    const valueNumber = Number(removeNonNumberFromString(target.value))
    context.setDaysOfPaidLeaveRemaining(valueNumber)
    target.value = String(valueNumber)
  }

  return (
    <div className={classes.root}>
      <TextField
        required
        id="name"
        label="退職者"
        defaultValue={name}
        placeholder="無職太郎"
        InputLabelProps={{
          shrink: true,
        }}
        className={clsx(classes.margin, classes.textField)}
        autoComplete="off"
        onChange={handleChangeName}
      />
      <TextField
        required
        id="companyName"
        label="会社名"
        defaultValue={companyName}
        placeholder="株式会社無職"
        InputLabelProps={{
          shrink: true,
        }}
        className={clsx(classes.margin, classes.textField)}
        autoComplete="off"
        onChange={handleChangeCompanyName}
      />
      <TextField
        required
        id="dateOfRetirement"
        label="退職日"
        type="date"
        defaultValue={dateOfRetirement}
        className={clsx(classes.margin, classes.textField)}
        InputLabelProps={{
          shrink: true,
        }}
        autoComplete="off"
        onChangeCapture={handleChangeDateOfRetirement}
      />
      <TextField
        required
        id="reason"
        label="退職理由"
        defaultValue={reason}
        placeholder="一身上の都合"
        InputLabelProps={{
          shrink: true,
        }}
        className={clsx(classes.margin, classes.textField)}
        autoComplete="off"
        onChange={handleChangeReason}
      />
      <TextField
        required
        label="残有給休暇日数"
        id="daysOfPaidLeaveRemaining"
        defaultValue={daysOfPaidLeaveRemaining}
        className={clsx(classes.margin, classes.textField)}
        InputProps={{
          endAdornment: <InputAdornment position="end">日</InputAdornment>,
        }}
        InputLabelProps={{
          shrink: true,
        }}
        autoComplete="off"
        onChange={handleChangeDaysOfPaidLeaveRemaining}
      />
    </div>
  )
}
