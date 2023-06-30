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

export const NameField = ({ form: { register, formState: { errors } } }: Props) => {
  const validations = { validate } 

  return (
    <>
      <label htmlFor="name" className="block text-900 font-medium mb-2">
        { translater("bootcampPageResumeFormNameField") }
      </label>

      <InputText
        { ...register('name', validations) }
        id="name"
        type='text'
        placeholder={ translater("bootcampPageResumeFormNameFieldPlaceholder").toString() }
        className="w-full mb-3" />

      <ErrorBlock errors={errors} keyword="name" />
    </>
  )
}
