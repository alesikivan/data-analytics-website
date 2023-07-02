import { InputTextarea } from 'primereact/inputtextarea'
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

export const CoveringLetterField = ({ form: { register, formState: { errors } } }: Props) => {
  const validations = { validate } 

  return (
    <>
      <label htmlFor="coveringLetter" className="block text-900 font-medium mb-2">
        { translater("bootcampPageResumeFormCoveringLetterField") }
      </label>

      <InputTextarea
        { ...register('coveringLetter', validations) }
        id="coveringLetter"
        rows={5}
        placeholder={ translater("bootcampPageResumeFormCoveringLetterFieldPlaceholder").toString() }
        className="w-full mb-3"
        style={{ minHeight: "48px" }} />

      <ErrorBlock errors={errors} keyword="coveringLetter" />
    </>
  )
}
