export type TextFieldProps<T> = {
  value: T
  minValue?: string
  setValue: (newValue: T) => void
  id: string
  label: string
  placeholder?: string
  endAdornment?: string
  isRequired: boolean
}
