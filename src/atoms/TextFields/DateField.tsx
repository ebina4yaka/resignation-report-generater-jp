import { ChangeEvent, ReactElement } from 'react'
import TextField from '@material-ui/core/TextField'
import useStyles from './useStyles'
import { TextFieldProps } from './TextFieldProps'

export default function DateField(props: TextFieldProps<string>): ReactElement {
  const { value, minValue, setValue, id, label, isRequired } = props
  const classes = useStyles()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    setValue(target.value)
  }

  return (
    <TextField
      required={isRequired}
      id={id}
      label={label}
      type="date"
      value={value}
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{ min: minValue }}
      autoComplete="off"
      onChange={handleChange}
    />
  )
}
