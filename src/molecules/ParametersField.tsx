import { ReactElement, useContext, useEffect, memo } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { parametersContext } from '../context/useParameters'
import calcDateOfRetirement from '../libs/calcDateOfRetirement'
import StringField from '../atoms/TextFields/StringField'
import NumberField from '../atoms/TextFields/NumberField'
import DateField from '../atoms/TextFields/DateField'
import { TextFieldProps } from '../atoms/TextFields/TextFieldProps'

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

const StringFieldMemo = memo((props: TextFieldProps<string>) => {
  return (
    <StringField
      value={props.value}
      setValue={props.setValue}
      id={props.id}
      label={props.label}
      placeholder={props.placeholder}
      isRequired={props.isRequired}
    />
  )
})

const DateFieldMemo = memo((props: TextFieldProps<string>) => {
  return (
    <DateField
      value={props.value}
      minValue={props.minValue}
      setValue={props.setValue}
      id={props.id}
      label={props.label}
      isRequired={props.isRequired}
    />
  )
})

const NumberFieldMemo = memo((props: TextFieldProps<number>) => {
  return (
    <NumberField
      value={props.value}
      setValue={props.setValue}
      id={props.id}
      label={props.label}
      endAdornment={props.endAdornment}
      isRequired={props.isRequired}
    />
  )
})

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
    setName,
    setCompanyName,
    setDepartment,
    setRepresentativeDirector,
    setDateOfNotification,
    setReason,
    setDaysOfPaidLeaveRemaining,
    setDateOfRetirement,
  } = context

  useEffect(() => {
    setDateOfRetirement(calcDateOfRetirement(dateOfNotification))
  }, [dateOfNotification])

  return (
    <div className={classes.root}>
      <StringFieldMemo
        value={name}
        setValue={setName}
        id="name"
        label="退職者"
        placeholder="無職太郎"
        isRequired
      />
      <StringFieldMemo
        value={companyName}
        setValue={setCompanyName}
        id="companyName"
        label="会社名"
        placeholder="株式会社無職"
        isRequired
      />
      <StringFieldMemo
        value={department}
        setValue={setDepartment}
        id="department"
        label="所属部署"
        placeholder="開発部退職課"
        isRequired={false}
      />
      <StringFieldMemo
        value={representativeDirector}
        setValue={setRepresentativeDirector}
        id="representativeDirector"
        label="代表取締役"
        placeholder="無職社長"
        isRequired
      />
      <StringFieldMemo
        value={reason}
        setValue={setReason}
        id="reason"
        label="退職理由"
        placeholder="一身上の都合"
        isRequired
      />
      <DateFieldMemo
        value={dateOfNotification}
        setValue={setDateOfNotification}
        id="dateOfNotification"
        label="退職届け出日"
        isRequired
      />
      <NumberFieldMemo
        value={daysOfPaidLeaveRemaining}
        setValue={setDaysOfPaidLeaveRemaining}
        label="消化有給休暇日数"
        id="daysOfPaidLeaveRemaining"
        endAdornment="日"
        isRequired
      />
      <DateFieldMemo
        value={dateOfRetirement}
        minValue={calcDateOfRetirement(dateOfNotification)}
        setValue={setDateOfRetirement}
        id="dateOfRetirement"
        label="退職日"
        isRequired
      />
    </div>
  )
}
