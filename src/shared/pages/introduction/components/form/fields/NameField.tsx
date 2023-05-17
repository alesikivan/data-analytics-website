import { useField } from "react-form"

const validate = (value: string) => {
  if (!value) return 'Name can not be empty'

  if (!value.trim()) return 'Name can not be empty'

  return false
}

export const NameField = () => {
  const {
    meta: { error, isTouched },
    getInputProps
  } = useField("name", {
    validate: validate,
    defaultValue: ''
  })

  return (
    <input 
      {...getInputProps()}
      className={`name ${isTouched && error ? 'error' : ''}`} 
      type="text" 
      name="name" 
      placeholder="Enter name"/>
  )
}