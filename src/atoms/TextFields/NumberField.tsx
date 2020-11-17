import { ChangeEvent, ReactElement } from 'react'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import useStyles from './useStyles'
import removeNonNumberFromString from '../../libs/removeNonNumberFromString'
import convertNumberFromZenkaku from '../../libs/convertNumberFromZenkaku'
import { TextFieldProps } from './TextFieldProps'

export default function NumberField(
  props: TextFieldProps<number>
): ReactElement {
  const { value, setValue, id, label, endAdornment, isRequired } = props
  const classes = useStyles()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    const valueNumber = Number(
      removeNonNumberFromString(convertNumberFromZenkaku(target.value))
    )
    setValue(valueNumber)
    target.value = String(valueNumber)
  }

  return (
    <TextField
      required={isRequired}
      id={id}
      label={label}
      value={value}
      className={classes.textField}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">{endAdornment}</InputAdornment>
        ),
      }}
      InputLabelProps={{
        shrink: true,
      }}
      autoComplete="off"
      onChange={handleChange}
    />
  )
}
