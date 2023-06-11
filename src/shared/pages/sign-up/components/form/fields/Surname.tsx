import { UseFormReturn } from "react-hook-form"

import { translater } from "../../../../../../utils/localization/localization"
import { FormData } from "../Form"
import { images } from "../../../../../../assets/images/imgs"

type Props = {
  form: UseFormReturn<FormData, any, undefined>
}

const validate = (value: string) => {
  if (!value) return translater("introductionPageFormSurnameFieldValidate").toString()

  if (!value.trim()) return translater("introductionPageFormSurnameFieldValidate").toString()

  return true
}

export const Surname = ({ form: { register, formState: { errors } } }: Props) => {
  const validations = { validate } 

  return (
    <>
      <input
        { ...register('surname', validations) }
        style={{ backgroundImage: `url(${images.signUp.form.surnameFieldIcon})` }}
        className={`app-elements-height surname ${errors && errors.surname?.message ? 'error' : ''}`}
        type="text"
        name="surname"
        placeholder={translater("introductionPageFormSurnameFieldPlaceholder").toString()}
      />
    </>
  )
}
