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

export const PasswordField = ({ form: { register, formState: { errors } } }: Props) => {
  const validations = { validate } 

  return (
    <>
      {/* <label htmlFor="password" className="block text-900 font-medium mb-2">
        { translater("loginPagePasswordField") }
      </label> */}

      <input
        { ...register('password', validations) }
        id="password"
        type="password"
        placeholder={ translater("loginPagePlaceholderPasswordField").toString() }
        className="p-inputtext p-component w-full app-font p-inputtext-sm" />

      <ErrorBlock errors={errors} keyword="password" />
    </>
  )
}
