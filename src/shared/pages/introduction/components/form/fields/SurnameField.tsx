import { useField } from "react-form"
import { translater } from "../../../../../../utils/localization/localization"

const validate = (value: string) => {
  if (!value) return translater("introductionPageFormSurnameFieldValidate").toString()

  if (!value.trim()) return translater("introductionPageFormSurnameFieldValidate").toString()

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
        placeholder={translater("introductionPageFormSurnameFieldPlaceholder").toString()}
      />
    </>
  )
}
