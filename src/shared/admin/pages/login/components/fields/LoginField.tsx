import { InputText } from "primereact/inputtext"
import { UseFormReturn } from "react-hook-form"

import { FormData } from "../Form"
import { translater } from "../../../../../../utils/localization/localization"
import { ErrorBlock } from "../../../../../components/particals/error/ErrorBlock"

const validate = (value: string) => {
  if (!value)
    return translater("emptyFieldError").toString()

  return true
}

type Props = {
  form: UseFormReturn<FormData, any>
}

export const LoginField = ({ form: { register, formState: { errors } } }: Props) => {
  const validations = { validate } 

  return (
    <>
      {/* <label htmlFor="login" className="block text-900 font-medium mb-2">
        { translater("loginPageLoginField") }
      </label> */}

      <InputText
        { ...register('login', validations) }
        id="login"
        type="text"
        placeholder={ translater("loginPagePlaceholderLoginField").toString() }
        className="w-full app-font p-inputtext-sm" />

      <ErrorBlock errors={errors} keyword="login" />
    </>
  )
}
