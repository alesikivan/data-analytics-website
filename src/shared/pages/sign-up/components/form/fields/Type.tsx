import clsx from "clsx"
import { UseFormReturn } from "react-hook-form"

import { ClientType } from "../../../../../../api/interfaces"
import { FormData } from "../Form"
import { images } from "../../../../../../assets/images/imgs"
import { translater } from "../../../../../../utils/localization/localization"

type Props = {
  form: UseFormReturn<FormData, any, undefined>
}

export const Type = (
  {
    form: { 
      getValues, 
      setValue, 
      trigger 
    } 
  }: Props
) => {
  const setType = (gender: ClientType) => {
    setValue('type', gender)
    trigger('type')
  }

  return (
    <div className="client-type-toggle app-elements-height">
      <div 
        onClick={() => setType('Student')} 
        className={clsx(
          'client-type',
          {
            'active': getValues('type') === 'Student'
          }
        )}>
        <img
          src={images.home.type[getValues('type') === 'Student' ? 'activeTypeStudent' : 'unactiveTypeStudent']}
          alt="male" />

        <span>
          {
            translater("introductionPageFormTypeToggleStudent")
          }
        </span>
      </div>

      <div 
        onClick={() => setType('Company')} 
        className={clsx(
          'client-type',
          {
            'active': getValues('type') === 'Company'
          }
        )}>
        <img
          src={images.home.type[getValues('type') === 'Company' ? 'activeTypeCompany' : 'unactiveTypeCompany']}
          alt="female" />

        <span>
          {
            translater("introductionPageFormTypeToggleCompany")
          }
        </span>
      </div>
    </div>
  )
}
