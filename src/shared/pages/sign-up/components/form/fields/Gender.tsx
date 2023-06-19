import { UseFormReturn } from "react-hook-form"

import { ClientGender } from "../../../../../../api/interfaces"
import { FormData } from "../Form"
import { images } from "../../../../../../assets/images/imgs"
import { translater } from "../../../../../../utils/localization/localization"
import clsx from "clsx"

type Props = {
  form: UseFormReturn<FormData, any, undefined>
}

export const Gender = (
  {
    form: { 
      getValues, 
      setValue, 
      trigger 
    } 
  }: Props
) => {
  const setGender = (gender: ClientGender) => {
    setValue('gender', gender)
    trigger('gender')
  }

  return (
    <div className="sex-toggle app-elements-height">
      <div 
        onClick={() => setGender('Male')} 
        className={clsx(
          'sex',
          {
            'active': getValues('gender') === 'Male'
          }
        )}>
        <img
          src={images.home.sex.male[getValues('gender') === 'Male' ? 'active' : 'unactive']}
          alt="male" />

        <span>
          {
            translater("introductionPageFormSexToggleMale")
          }
        </span>
      </div>

      <div 
        onClick={() => setGender('Female')} 
        className={clsx(
          'sex',
          {
            'active': getValues('gender') === 'Female'
          }
        )}>
        <img
          src={images.home.sex.female[getValues('gender') === 'Female' ? 'active' : 'unactive']}
          alt="female" />

        <span>
          {
            translater("introductionPageFormSexToggleFemale")
          }
        </span>
      </div>
      <div 
        onClick={() => setGender('Diverse')} 
        className={clsx(
          'sex',
          {
            'active': getValues('gender') === 'Diverse'
          }
        )}>

        <span>
          {
            translater("introductionPageFormSexToggleDiverse")
          }
        </span>
      </div>
    </div>
  )
}
