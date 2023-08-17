import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "primereact/button"
import { useState } from "react"
import { AxiosResponse } from "axios"

import { API } from "../../../../../../api"
import { MessageServerResponse } from "../../../../../../api/interfaces"
import { translater } from "../../../../../../utils/localization/localization"
import { CoveringLetterField } from "./fields/CoveringLetter"
import { NameField } from "./fields/Name"
import { SurnameField } from "./fields/Surname"
import { EmailField } from "./fields/Email"
import { ResumeField } from "./fields/Resume"
import { successNotification } from "../../../../../../redux/actions/notificationsActions"
import { InformationProcessing, PrivacyTerms } from "../../../../sign-up/components/form/Form"
import { PrivacyPolicy } from "./fields/PrivacyPolicy"

type Props = {
  hideModal: Function,
}

export type FormData = {
  name: string,
  surname: string,
  email: string,
  resume: File | null,
  coveringLetter: string,
}

const defaultFormValues = {
  name: '',
  surname: '',
  email: '',
  resume: null,
  coveringLetter: '',
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

    // console.log(formData)
    
    API.uploadResume(data)
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
      className="resume-form dialog-form w-full mt-3">
        <div>
          <NameField form={form} />
          <SurnameField form={form} />
          <EmailField form={form} />
          <ResumeField form={form} />
          <CoveringLetterField form={form} />
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
            label={translater("bootcampPageResumeFormButton").toString()}
            disabled={submitCount > 0 && !isValid} />
        </div>
    </form>
  )
}
