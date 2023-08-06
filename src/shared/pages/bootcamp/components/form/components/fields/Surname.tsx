import { InputText } from 'primereact/inputtext'
import { UseFormReturn } from "react-hook-form"

import { translater } from "../../../../../../../utils/localization/localization"
import { FormData } from "../Form"
import { ErrorBlock } from "../../../../../../components/particals/error/ErrorBlock"

const validate = (value: string) => {
  if (!value)
    return translater("bootcampPageResumeFormEmptyValidate").toString()

  return true
}

type Props = {
  form: UseFormReturn<FormData, any>
}

export const SurnameField = ({ form: { register, formState: { errors } } }: Props) => {
  const validations = { validate } 

  return (
    <>
      <label htmlFor="surname" className="block text-900 font-medium mb-2">
        { translater("bootcampPageResumeFormSurnameField") }
      </label>

      <InputText
        { ...register('surname', validations) }
        id="surname"
        type='text'
        placeholder={ translater("bootcampPageResumeFormSurnameFieldPlaceholder").toString() }
        className="w-full mb-3 app-font" />

      <ErrorBlock errors={errors} keyword="surname" />
    </>
  )
}
