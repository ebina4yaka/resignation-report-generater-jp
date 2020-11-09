import React, { ChangeEvent, ReactElement, useContext, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { parametersContext } from '../context/useParameters'
import removeNonNumberFromString from '../libs/removeNonNumberFromString'
import calcDateOfRetirement from '../libs/calcDateOfRetirement'
import convertNumberFromZenkaku from '../libs/convertNumberFromZenkaku'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    textField: {
      width: '30ch',
      margin: theme.spacing(1),
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  })
)

export default function ParametersField(): ReactElement {
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

  useEffect(() => {
    context.setDateOfRetirement(calcDateOfRetirement(dateOfNotification))
  }, [dateOfNotification])

  const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    context.setName(target.value)
  }

  const handleChangeRepresentativeDirector = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { target } = event
    context.setRepresentativeDirector(target.value)
  }

  const handleChangeCompanyName = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    context.setCompanyName(target.value)
  }

  const handleChangeDepartment = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    context.setDepartment(target.value)
  }

  const handleChangeDateOfNotification = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { target } = event
    context.setDateOfNotification(target.value)
  }

  const handleChangeReason = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    context.setReason(target.value)
  }

  const handleChangeDaysOfPaidLeaveRemaining = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { target } = event
    const valueNumber = Number(
      removeNonNumberFromString(convertNumberFromZenkaku(target.value))
    )
    context.setDaysOfPaidLeaveRemaining(valueNumber)
    target.value = String(valueNumber)
  }

  const handleChangeDateOfRetirement = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const { target } = event
    context.setDateOfRetirement(target.value)
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
        className={classes.textField}
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
        className={classes.textField}
        autoComplete="off"
        onChange={handleChangeCompanyName}
      />
      <TextField
        id="department"
        label="所属部署"
        defaultValue={department}
        placeholder="開発部退職課"
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.textField}
        autoComplete="off"
        onChange={handleChangeDepartment}
      />
      <TextField
        required
        id="representativeDirector"
        label="代表取締役"
        defaultValue={representativeDirector}
        placeholder="無職社長"
        InputLabelProps={{
          shrink: true,
        }}
        className={classes.textField}
        autoComplete="off"
        onChange={handleChangeRepresentativeDirector}
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
        className={classes.textField}
        autoComplete="off"
        onChange={handleChangeReason}
      />
      <TextField
        required
        id="dateOfNotification"
        label="退職届け出日"
        type="date"
        defaultValue={dateOfNotification}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        autoComplete="off"
        onChange={handleChangeDateOfNotification}
      />
      <TextField
        required
        label="消化有給休暇日数"
        id="daysOfPaidLeaveRemaining"
        defaultValue={daysOfPaidLeaveRemaining}
        className={classes.textField}
        InputProps={{
          endAdornment: <InputAdornment position="end">日</InputAdornment>,
        }}
        InputLabelProps={{
          shrink: true,
        }}
        autoComplete="off"
        onChange={handleChangeDaysOfPaidLeaveRemaining}
      />
      <TextField
        required
        id="dateOfRetirement"
        label="退職日"
        type="date"
        inputProps={{ min: calcDateOfRetirement(dateOfNotification) }}
        value={dateOfRetirement}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        autoComplete="off"
        onChange={handleChangeDateOfRetirement}
      />
    </div>
  )
}
