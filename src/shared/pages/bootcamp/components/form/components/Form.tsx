import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "primereact/button"
import { useState } from "react"

import { API } from "../../../../../../api"
import { MessageServerResponse, MongoId } from "../../../../../../api/interfaces"
import { translater } from "../../../../../../utils/localization/localization"
import { CoveringLetterField } from "./fields/CoveringLetter"
import { NameField } from "./fields/Name"
import { SurnameField } from "./fields/Surname"
import { EmailField } from "./fields/Email"

type Props = {
  hideModal: Function,
}

export type FormData = {
  name: string,
  surname: string,
  email: string,
  coveringLetter: string,
}

const defaultFormValues = {
  name: '',
  surname: '',
  email: '',
  coveringLetter: '',
}

export const Form = ({ hideModal }: Props) => {
  const [loading, setLoading] = useState(false)

  // const sendRequest = (data: CreateUserRequest) => {
  //   setLoading(true)

  //   const content = JSON.parse(JSON.stringify(data))
  //   if (content.email.trim() === '') delete content.email

  //   API.createUser(content)
  //     .then((responce: AxiosResponse<MessageServerResponse>) => {
  //       const { data: { message } } = responce
  //       successNotification(message)

  //       hideModal()
  //       loadData()

  //       setLoading(false)
  //     })
  //     .catch(() => setLoading(false))
  // }

  const form = useForm<FormData>({ 
    mode: 'all',
    defaultValues: defaultFormValues
  })

  const {
    handleSubmit,
    formState: { isValid, submitCount }
  } = form

  // const onSubmit: SubmitHandler<FormData> = data => sendRequest(data)

  return (
    <form
      // onSubmit={ handleSubmit(onSubmit) }
      className="w-full">
        <div>
          <NameField form={form} />
          <SurnameField form={form} />
          <EmailField form={form} />
          <CoveringLetterField form={form} />
        </div>

        <div className="w-full flex justify-content-end gap-3 mt-4">
          <button 
            className="w-full app-button app-bg-color text-white"
            style={{padding: "0.7rem"}}
            // loading={loading}
            disabled={submitCount > 0 && !isValid}>
              <span style={{ fontFamily: "Bold", fontSize: "15px" }}>
                {
                  translater("bootcampPageResumeFormButton")
                }
              </span>
          </button>
        </div>
    </form>
  )
}
