import clsx from "clsx"
import { UseFormReturn } from "react-hook-form"

import { translater } from "../../../../../../utils/localization/localization"
import { FormData } from "../Form"
import { images } from "../../../../../../assets/images/imgs"

type Props = {
  form: UseFormReturn<FormData, any, undefined>
}

const validate = (value: string) => {
  if (!value.trim()) return translater("introductionPageFormEmailFieldValidate").toString()

  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegExp.test(value))
    return translater("FormEmailFieldValidate").toString()

  return true
}

export const Email = ({ form: { register, formState: { errors } } }: Props) => {
  const validations = { validate }

  return (
    <>
      <input
        { ...register('email', validations) }
        style={{ backgroundImage: `url(${images.signUp.form.emailldIcon})` }}
        className={clsx('email app-elements-height', {
          'error': errors && errors.email?.message
        })}
        type="text"
        name="email"
        placeholder={translater("introductionPageFormEmailFieldPlaceholder").toString()}/>
    </>
  )
}
