import { useState } from "react"
import { useForm } from "react-form"
import { AxiosResponse } from "axios"
import { Link } from "react-router-dom"
import clsx from "clsx"

import { EmailField } from "./fields/EmailField"
import { NameField } from "./fields/NameField"
import { SurnameField } from "./fields/SurnameField"
import { HubSpotLoginRequest, MessageServerResponse } from "../../../../../api/interfaces"
import { API } from "../../../../../api/index"
import { images } from "../../../../../assets/images/imgs"

type Props = {
  showDoneInterface: Function
}

type User = {
  name: string,
  surname: string,
  isMaleSex: boolean
}

const defaultUserData = {
  name: '',
  surname: '',
  isMaleSex: true
}

type PrivacyTerms = {
  selected: boolean, 
  isTouched: boolean
}

type FormData = {
  email: string,
  name: string,
  surname: string
}

const defaultPrivacyTerms = { selected: false, isTouched: false }

export const Form = ({ showDoneInterface }: Props) => {
  const [user, setUser] = useState<User>(defaultUserData)
  const [privacyTerms, setPrivacyTerms] = useState<PrivacyTerms>(defaultPrivacyTerms)
  const [loading, setLoading] = useState(false) 

  const reset = () => {
    setUser(defaultUserData)
    setPrivacyTerms(defaultPrivacyTerms)
  }

  const sendData = (values: FormData) => {
    setLoading(true)

    const data: HubSpotLoginRequest = {
      ...values,
      gender: user.isMaleSex ? 'Male' : 'Female'
    }

    API.hubspotLogin(data)
      .then((responce: AxiosResponse<MessageServerResponse>) => {
        setLoading(false)

        showDoneInterface()

        reset()
      })
      .catch(() => setLoading(false))
  }

  const {
    Form,
    meta: { fieldsAreValid },
  } = useForm({
    onSubmit: async (values: FormData) => {
      setPrivacyTerms(prev => ({ ...prev, isTouched: true }))

      if (!loading && privacyTerms.selected) {
        sendData(values)
      }
    },
  })

  return (
    <Form>
      <span className="description">
        Let's join and work with us! 
        <br />
        Leave your email and we will notify you when the program starts. The main goal is to make our future better.
      </span>

      <div className="line">
        <NameField />
        <SurnameField />
      </div>

      <EmailField />

      <div className="sex-toggle">
        <div onClick={() => setUser(prev => ({ ...prev, isMaleSex: true }))} className="sex">
          <img src={images.home.sex.male[user.isMaleSex ? 'active' : 'unactive']} alt="male" />
          <span className="male">male</span>
        </div>

        <div onClick={() => setUser(prev => ({ ...prev, isMaleSex: false }))} className="sex">
          <img src={images.home.sex.female[user.isMaleSex ? 'unactive' : 'active']} alt="female" />
          <span className="female">female</span>
        </div>
      </div>

      <button 
        className={clsx({
          'send-button': true,
          'loading': loading,
          'disabled': !fieldsAreValid
        })} >
          Notify me
      </button>

      <div className="policy-area">
        <div 
          onClick={() => setPrivacyTerms(prev => ({selected: !prev.selected, isTouched: true }) )} 
          className={
            clsx({
              "flag-area": true,
              "error": privacyTerms.isTouched && !privacyTerms.selected
            })
          }>
          {
            privacyTerms.selected ? (
              <img src={images.home.check} alt="check" className="flag" />
            ) : ''
          }
        </div>

        <span>I agree with the <Link to="/privacy-policy">Terms</Link>.</span>
      </div>
    </Form>
  )
}
