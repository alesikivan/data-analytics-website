import { InputTextarea } from 'primereact/inputtextarea'
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

export const QuestionField = ({ form: { register, formState: { errors } } }: Props) => {
  const validations = { validate } 

  return (
    <>
      <label htmlFor="question" className="block text-900 font-medium mb-2">
        { translater("contactUsDialogFormQuestionField") }
      </label>

      <InputTextarea
        { ...register('question', validations) }
        id="question"
        rows={5}
        placeholder={ translater("contactUsDialogFormQuestionFieldPlaceholder").toString() }
        className="w-full mb-3 app-font"
        style={{ minHeight: "48px" }} />

      <ErrorBlock errors={errors} keyword="question" />
    </>
  )
}
