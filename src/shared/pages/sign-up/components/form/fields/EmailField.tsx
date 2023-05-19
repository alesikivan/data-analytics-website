import { useField } from "react-form"
import clsx from "clsx"
import { translater } from "../../../../../../utils/localization/localization"

const validate = (value: string) => {
  if (!value.trim()) return translater("introductionPageFormEmailFieldValidate").toString()

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
        className={clsx('email app-elements-height', {
          'error': isTouched && error
        })}
        type="text"
        name="email"
        placeholder={translater("introductionPageFormEmailFieldPlaceholder").toString()}/>
    </>
  )
}
