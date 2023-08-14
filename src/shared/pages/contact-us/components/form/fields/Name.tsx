import { InputText } from 'primereact/inputtext'
import { UseFormReturn } from "react-hook-form"

import { FormData } from "../Form"
import { translater } from '../../../../../../utils/localization/localization'
import { ErrorBlock } from '../../../../../components/particals/error/ErrorBlock'

const validate = (value: string) => {
  if (!value)
    return translater("contactUsDialogFormEmptyValidate").toString()

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
        { translater("contactUsDialogFormNameField") }
      </label>

      <InputText
        { ...register('name', validations) }
        id="name"
        type='text'
        placeholder={ translater("contactUsDialogFormNameFieldPlaceholder").toString() }
        className="w-full mb-3 app-font" />

      <ErrorBlock errors={errors} keyword="name" />
    </>
  )
}
