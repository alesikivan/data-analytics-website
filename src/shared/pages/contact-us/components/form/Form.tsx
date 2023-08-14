import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "primereact/button"
import { useState } from "react"
import { AxiosResponse } from "axios"

import { successNotification } from "../../../../../redux/actions/notificationsActions"
import { API } from "../../../../../api"
import { InformationProcessing, PrivacyTerms } from "../../../sign-up/components/form/Form"
import { MessageServerResponse } from "../../../../../api/interfaces"
import { translater } from "../../../../../utils/localization/localization"
import { NameField } from "./fields/Name"
import { SurnameField } from "./fields/Surname"
import { EmailField } from "./fields/Email"
import { QuestionField } from "./fields/Question"
import { PrivacyPolicy } from "./fields/PrivacyPolicy"

type Props = {
  hideModal: Function,
}

export type FormData = {
  name: string,
  surname: string,
  email: string,
  question: string,
}

const defaultFormValues = {
  name: '',
  surname: '',
  email: '',
  question: '',
}

const defaultPrivacyTerms = { selected: false, isTouched: false }
const defaultInformationProcessing = { selected: false, isTouched: false }

export const Form = ({ hideModal }: Props) => {
  const [privacyTerms, setPrivacyTerms] = useState<PrivacyTerms>(defaultPrivacyTerms)
  const [informationProcessing, setInformationProcessing] = useState<InformationProcessing>(defaultInformationProcessing)
  const [loading, setLoading] = useState(false)

  const reset = () => {
    setPrivacyTerms(defaultPrivacyTerms)
    setInformationProcessing(defaultInformationProcessing)
  }
  
  const sendRequest = (data: any) => {
    setLoading(true)

    // const formData = new FormData()
    // formData.append("resume", data.resume);

    console.log(data)
    
    API.contactUs(data)
      .then((responce: AxiosResponse<MessageServerResponse>) => {
        const { data: { message } } = responce
        successNotification(message)

        hideModal()

        reset()

        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  const form = useForm<FormData>({ 
    mode: 'all',
    defaultValues: defaultFormValues
  })

  const {
    handleSubmit,
    formState: { isValid, submitCount }
  } = form

  const onSubmit: SubmitHandler<FormData> = data => {
    setPrivacyTerms(prev => ({ ...prev, isTouched: true }))
    setInformationProcessing(prev => ({ ...prev, isTouched: true }))
    
    if (!loading && privacyTerms.selected && informationProcessing.selected) {
      sendRequest(data)
    }
  }

  return (
    <form
      onSubmit={ handleSubmit(onSubmit) }
      className="dialog-form w-full mt-3">
        <div>
          <NameField form={form}/>
          <SurnameField form={form}/>
          <EmailField form={form}/>
          <QuestionField form={form}/>
          <PrivacyPolicy
            informationProcessing={informationProcessing}
            setInformationProcessing={setInformationProcessing}
            privacyTerms={privacyTerms}
            setPrivacyTerms={setPrivacyTerms}/>
        </div>

        <div className="w-full flex justify-content-end mt-3 gap-3">
          <Button
            className="send-resume w-full app-button app-bg-color text-white"
            loading={loading}
            label={translater("contactUsDialogFormButton").toString()}
            disabled={submitCount > 0 && !isValid} />
        </div>
    </form>
  )
}
