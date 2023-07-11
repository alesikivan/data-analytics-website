import { Button } from "primereact/button"
import { SubmitHandler, useForm } from "react-hook-form"

import { LoginField } from "./fields/LoginField"
import { PasswordField } from "./fields/PasswordField"
import { translater } from "../../../../../utils/localization/localization"
import { useState } from "react"
import { LoginRequest } from "../../../../../api/interfaces"
import { login } from "../../../../../redux/actions/authActions"
import { useNavigate } from "react-router-dom"

export type FormData = {
  login: string,
  password: string
}

const defaultFormValues: FormData = {
  login: '',
  password: '',
}

export const Form = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const signIn = async (data: LoginRequest) => {
    setLoading(true)

    try {
      const response = await login(data)
      navigate('/panel')
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  const form = useForm<FormData>({
    mode: 'all',
    defaultValues: defaultFormValues
  })

  const {
    handleSubmit,
    formState: { isValid, submitCount }
  } = form

  const onSubmit: SubmitHandler<FormData> = data => signIn(data)

  return (
    <form
      onSubmit={ handleSubmit(onSubmit) }
      className="w-full">
      <div className="surface-card login-form mt-2 border-round max-w-30rem mx-auto gap-2 flex flex-column">
      <LoginField form={form} />

      <PasswordField form={form} />

      <Button
        className="w-full p-button-success login-btn p-button-sm"
        label={translater("loginPageSubmitButton").toString()}
        icon="pi pi-user-plus"
        loading={loading}
        disabled={submitCount > 0 && !isValid} />
      </div>
    </form>
  )
}