import { UseFormReturn } from "react-hook-form"

import { translater } from "../../../../../../utils/localization/localization"
import { FormData } from "../Form"
import { images } from "../../../../../../assets/images/imgs"

type Props = {
  form: UseFormReturn<FormData, any, undefined>
}

const validate = (value: string) => {
  if (!value) return translater("introductionPageFormNameFieldValidate").toString()

  if (!value.trim()) return translater("introductionPageFormNameFieldValidate").toString()

  return true
}

export const Name = ({ form: { register, formState: { errors } } }: Props) => {
  const validations = { validate } 

  return (
    <input
      { ...register('name', validations) }
      style={{ backgroundImage: `url(${images.signUp.form.nameFieldIcon})` }}
      className={`app-elements-height name ${errors && errors.name?.message ? 'error' : ''}`}
      type="text"
      name="name"
      placeholder={translater("introductionPageFormNameFieldPlaceholder").toString()}
    />
  )
}
