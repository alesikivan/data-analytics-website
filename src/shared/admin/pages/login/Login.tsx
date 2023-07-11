import { Form } from "./components/Form"

import '../../../../assets/styles/scss/pages/admin/login.scss'

export const Login = () => {
  return (
    <main className="relative system-settings flex flex-column align-items-center justify-content-center mt-5">
      <h1>System settings</h1>
      <Form />
    </main>
  )
}
