import { useField } from "react-form"

const validate = (value: string) => {
  if (!value) return 'Name can not be empty'

  if (!value.trim()) return 'Name can not be empty'

  return false
}

export const SurnameField = () => {
  const {
    meta: { error, isTouched },
    getInputProps
  } = useField("surname", {
    validate: validate,
    defaultValue: ''
  })

  return (
    <>
      <input 
        {...getInputProps()}
        className={`surname ${isTouched && error ? 'error' : ''}`} 
        type="text" 
        name="surname" 
        placeholder="Enter surname"/>
    </>
  )
}