import { useField } from "react-form"
import { translater } from "../../../../../../utils/localization/localization"

const validate = (value: string) => {
  if (!value) return translater("introductionPageFormNameFieldValidate").toString()

  if (!value.trim()) return translater("introductionPageFormNameFieldValidate").toString()

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
      placeholder={translater("introductionPageFormNameFieldPlaceholder").toString()}
    />
  )
}
