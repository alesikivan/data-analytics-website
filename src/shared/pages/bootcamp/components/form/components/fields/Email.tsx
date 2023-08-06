import { InputText } from 'primereact/inputtext'
import { UseFormReturn } from "react-hook-form"

import { translater } from "../../../../../../../utils/localization/localization"
import { FormData } from "../Form"
import { ErrorBlock } from "../../../../../../components/particals/error/ErrorBlock"

const validate = (value: string) => {
  if (!value)
    return translater("bootcampPageResumeFormEmptyValidate").toString()

  const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegExp.test(value))
    return translater("FormEmailFieldValidate").toString()

  return true
}

type Props = {
  form: UseFormReturn<FormData, any>
}

export const EmailField = ({ form: { register, formState: { errors } } }: Props) => {
  const validations = { validate } 

  return (
    <>
      <label htmlFor="email" className="block text-900 font-medium mb-2">
        { translater("bootcampPageResumeFormEmailField") }
      </label>

      <InputText
        { ...register('email', validations) }
        id="email"
        type='email'
        placeholder={ translater("bootcampPageResumeFormEmailFieldPlaceholder").toString() }
        className="w-full mb-3 app-font" />

      <ErrorBlock errors={errors} keyword="email" />
    </>
  )
}
