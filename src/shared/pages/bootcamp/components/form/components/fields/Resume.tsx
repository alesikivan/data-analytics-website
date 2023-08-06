import { FileUpload } from 'primereact/fileupload'
import { UseFormReturn } from "react-hook-form"

import { translater } from "../../../../../../../utils/localization/localization"
import { FormData } from "../Form"
import { ErrorBlock } from "../../../../../../components/particals/error/ErrorBlock"

const validate = (value: File | null) => {
  if (!value) {
    return translater("bootcampPageResumeFormEmptyValidate").toString();
  }

  return true
}

type Props = {
  form: UseFormReturn<FormData, any>
}

export const ResumeField = ({ form: { register, formState: { errors }, setValue, trigger } }: Props) => {
  const validations = { validate } 

  const onUpload = (event: any) => {
    const { files } = event

    const [ file ] = files

    if (file) {
      setValue("resume", file)
      setTimeout(() => trigger("resume"), 0)
    }
  }
  
  const onClear = () => {
    setValue("resume", null)
    setTimeout(() => trigger("resume"), 0)
  }

  return (
    <>
      <label htmlFor="resume" className="block text-900 font-medium mb-2">
        { translater("bootcampPageResumeFormResumeField") }
      </label>

      <FileUpload 
        { ...register('resume', validations) }
        id="resume"
        mode="basic" 
        name="resume" 
        accept=".pdf"
        chooseLabel={translater("bootcampPageResumeFormResumeFieldChooseLabel").toString()}
        onSelect={onUpload}
        onClear={onClear}
        contentClassName="font-bold"
        className="w-full mb-3 app-font" />

      <ErrorBlock errors={errors} keyword="resume" />
    </>
  )
}
