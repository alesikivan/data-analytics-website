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

export const Form = ({ hideModal }: Props) => {
  const [loading, setLoading] = useState(false)

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
    sendRequest(data)
  }

  return (
    <form
      onSubmit={ handleSubmit(onSubmit) }
      className="w-full mt-3">
        <div>
          <NameField form={form} />
          <SurnameField form={form} />
          <EmailField form={form} />
          <ResumeField form={form} />
          <CoveringLetterField form={form} />
        </div>

        <div className="w-full flex justify-content-end gap-3">
          <Button
            className="send-resume w-full app-button app-bg-color text-white"
            loading={loading}
            label={translater("bootcampPageResumeFormButton").toString()}
            disabled={submitCount > 0 && !isValid} />
        </div>
    </form>
  )
}
