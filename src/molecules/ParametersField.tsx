import React from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'

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
  const nowYear = new Date().getFullYear()
  const nowMonth = new Date().getMonth() + 1
  const nowDate = new Date().getDate()
  const dateString = `${nowYear}-${nowMonth}-${nowDate}`
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <TextField
        required
        id="company"
        label="会社名"
        defaultValue=""
        placeholder="株式会社無職"
        InputLabelProps={{
          shrink: true,
        }}
        className={clsx(classes.margin, classes.textField)}
      />
      <TextField
        required
        id="date-of-retirement"
        label="退職日"
        type="date"
        defaultValue={dateString}
        className={clsx(classes.margin, classes.textField)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        required
        id="reason"
        label="退職理由"
        defaultValue=""
        placeholder="一身上の都合"
        InputLabelProps={{
          shrink: true,
        }}
        className={clsx(classes.margin, classes.textField)}
      />
      <TextField
        required
        label="残有給休暇日数"
        id="days-of-paid-leave-remaining"
        defaultValue="0"
        className={clsx(classes.margin, classes.textField)}
        InputProps={{
          endAdornment: <InputAdornment position="end">日</InputAdornment>,
        }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  )
}
