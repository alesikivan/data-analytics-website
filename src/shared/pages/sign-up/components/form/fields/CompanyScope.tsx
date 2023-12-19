import { UseFormReturn } from "react-hook-form"

import { translater } from "../../../../../../utils/localization/localization"
import { FormData } from "../Form"
import { images } from "../../../../../../assets/images/imgs"

type Props = {
  form: UseFormReturn<FormData, any, undefined>
}

const validate = (value: string, form: FormData) => {
  if (form.type === 'Company' && !value) return translater("introductionPageFormCompanyScopeFieldValidate").toString()

  if (form.type === 'Company' && !value.trim()) return translater("introductionPageFormCompanyScopeFieldValidate").toString()

  return true
}

export const CompanyScope = ({ form: { register, formState: { errors } } }: Props) => {
  const validations = { validate } 

  return (
    <input
      { ...register('companyScope', validations) }
      style={{ backgroundImage: `url(${images.signUp.form.companyScopeFieldIcon})` }}
      className={`app-elements-height name company-field ${errors && errors.companyScope?.message ? 'error' : ''}`}
      type="text"
      name="companyScope"
      placeholder={translater("introductionPageFormCompanyScopeFieldPlaceholder").toString()}
    />
  )
}
