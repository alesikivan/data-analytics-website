import { UseFormReturn } from "react-hook-form"

import { translater } from "../../../../../../utils/localization/localization"
import { FormData } from "../Form"
import { images } from "../../../../../../assets/images/imgs"

type Props = {
  form: UseFormReturn<FormData, any, undefined>
}

const validate = (value: string, form: FormData) => {
  if (form.type === 'Company' && !value) return translater("introductionPageFormCompanyNameFieldValidate").toString()

  if (form.type === 'Company' && !value.trim()) return translater("introductionPageFormCompanyNameFieldValidate").toString()

  return true
}

export const CompanyName = ({ form: { register, formState: { errors } } }: Props) => {
  const validations = { validate } 

  return (
    <input
      { ...register('companyName', validations) }
      style={{ backgroundImage: `url(${images.signUp.form.companyNameFieldIcon})` }}
      className={`app-elements-height name company-field ${errors && errors.companyName?.message ? 'error' : ''}`}
      type="text"
      name="companyName"
      placeholder={translater("introductionPageFormCompanyNameFieldPlaceholder").toString()}
    />
  )
}
