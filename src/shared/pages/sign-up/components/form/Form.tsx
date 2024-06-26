import { useEffect, useState } from "react"
import { AxiosResponse } from "axios"
import clsx from "clsx"
import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from 'primereact/button'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'

import { Email } from "./fields/Email"
import { Name } from "./fields/Name"
import { Gender } from "./fields/Gender"
import { Surname } from "./fields/Surname"
import { ClientType, ClientGender, MessageServerResponse } from "../../../../../api/interfaces"
import { API } from "../../../../../api/index"
import { translater } from "../../../../../utils/localization/localization"
import { PrivacyPolicy } from "./fields/PrivacyPolicy"
import { Type } from "./fields/Type"
import { CompanyName } from "./fields/CompanyName"
import { CompanyScope } from "./fields/CompanyScope"

type Props = {
  showDoneInterface: Function
}

export type PrivacyTerms = {
  selected: boolean,
  isTouched: boolean
}

export type InformationProcessing = PrivacyTerms

export type FormData = {
  name: string,
  surname: string,
  email: string,
  gender: ClientGender,
  type: ClientType,
  companyName: string,
  companyScope: string
}

const defaultFormValues: FormData = {
  name: '',
  surname: '',
  email: '',
  gender: 'Male',
  type: 'Student',
  companyName: '',
  companyScope: ''
}

const defaultPrivacyTerms = { selected: false, isTouched: false }
const defaultInformationProcessing = { selected: false, isTouched: false }

export const Form = ({ showDoneInterface }: Props) => {
  const [privacyTerms, setPrivacyTerms] = useState<PrivacyTerms>(defaultPrivacyTerms)
  const [informationProcessing, setInformationProcessing] = useState<InformationProcessing>(defaultInformationProcessing)
  const [loading, setLoading] = useState(false)
  const location = useLocation()

  const reset = () => {
    setPrivacyTerms(defaultPrivacyTerms)
    setInformationProcessing(defaultInformationProcessing)
  }

  const sendData = (values: FormData) => {
    setLoading(true)

    API.hubspotLogin(values)
      .then((response: AxiosResponse<MessageServerResponse>) => {
        setLoading(false)

        showDoneInterface()

        window.scrollTo(0, 0)

        reset()
      })
      .catch((error) => {
        setLoading(false)
      })
  }

  const form = useForm<FormData>({
    mode: 'all',
    defaultValues: defaultFormValues
  })

  const {
    handleSubmit,
    formState: { isValid, submitCount },
    getValues,
    setValue,
    trigger
  } = form

  const onSubmit: SubmitHandler<FormData> = data => {
    setPrivacyTerms(prev => ({ ...prev, isTouched: true }))
    setInformationProcessing(prev => ({ ...prev, isTouched: true }))

    if (!loading && privacyTerms.selected && informationProcessing.selected) {
      sendData(data)
    }
  }

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    if (searchParams.has('type')) {
      setValue('type', 'Company')
      
      setTimeout(() => trigger('type'), 0)
    }
  }, [location])

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}>
      <span className="description">
        {
          translater("introductionPageFormDescription")
        }
        <Link to='/'>{translater('introductionPageFormDescriptionLink')}</Link>
      </span>

      <div className="line">
        <Name form={form} />
        <Surname form={form} />
      </div>

      <Email form={form} />

      <div className="line flex-column">
        <Type form={form} />

        {
          getValues('type') === 'Student' ? (
            <Gender form={form} />
          ) : (
            <div className="line">
              <CompanyName form={form} />
              <CompanyScope form={form} />
            </div>
          )
        }
      </div>

      <Button
        loadingIcon=""
        loading={loading}
        className={clsx('send-button app-elements-height bold-button-span', {
          'loading': loading,
          'disabled': submitCount > 0 && !isValid
        })}
        label={translater("introductionPageFormSendButton").toString()} />

      <PrivacyPolicy
        informationProcessing={informationProcessing}
        setInformationProcessing={setInformationProcessing}
        privacyTerms={privacyTerms}
        setPrivacyTerms={setPrivacyTerms} />
    </form>
  )
}
