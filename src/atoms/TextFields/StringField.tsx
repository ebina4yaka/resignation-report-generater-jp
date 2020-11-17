import { ChangeEvent, ReactElement } from 'react'
import TextField from '@material-ui/core/TextField'
import useStyles from './useStyles'
import { TextFieldProps } from './TextFieldProps'

export default function StringField(
  props: TextFieldProps<string>
): ReactElement {
  const { value, setValue, id, label, placeholder, isRequired } = props
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
      value={value}
      placeholder={placeholder}
      InputLabelProps={{
        shrink: true,
      }}
      className={classes.textField}
      autoComplete="off"
      onChange={handleChange}
    />
  )
}
