import {  useState } from "react"

import { SuccessfullySaved } from "./components/SuccessfullySaved"
import { translater } from "../../../utils/localization/localization"
import { Form } from "./components/form/Form"
import { images } from "../../../assets/images/imgs"

import '../../../assets/styles/scss/pages/sign-up.scss'

export const SignUp = () => {
  const [doneInterfaceVisible, setDoneInterfaceVisible] = useState(false)

  return (
    <main className="sign-up">
      {
        doneInterfaceVisible
          ? <SuccessfullySaved
              hideDoneInterface={() => setDoneInterfaceVisible(false)} />
          : (
            <article>
              <section className="background-image">
                <img src={images.home.background} alt="background" />
              </section>

              <section className="information">
                <h1 className="introduction-header">
                  {
                    translater("introductionPageHeader")
                  }
                </h1>

                <Form
                  showDoneInterface={() => setDoneInterfaceVisible(true)}/>
              </section>
            </article>
          )
      }
    </main>
  )
}
