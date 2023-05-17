import { useField } from "react-form"
import clsx from "clsx"

const validate = (value: string) => {
  if (!value.trim()) return 'Email can not be empty'

  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegExp.test(value)) 
    return 'Invalid email format'

  return false
}

export const EmailField = () => {
  const {
    meta: { error, isTouched },
    getInputProps
  } = useField("email", {
    validate: validate,
    defaultValue: ''
  })

  return (
    <>
      <input 
        {...getInputProps()}
        className={clsx({
          'email': true,
          'error': isTouched && error
        })} 
        type="text" 
        name="email" 
        placeholder="Enter your email address"/>
    </>
  )
}