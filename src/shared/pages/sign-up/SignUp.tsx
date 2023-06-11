import {  useState } from "react"
import { useNavigate } from "react-router-dom"

import { SuccessfullySaved } from "./components/SuccessfullySaved"
import { translater } from "../../../utils/localization/localization"
import { Form } from "./components/form/Form"
import { images } from "../../../assets/images/imgs"

import '../../../assets/styles/scss/pages/sign-up.scss'

export const SignUp = () => {
  const [doneInterfaceVisible, setDoneInterfaceVisible] = useState(false)
  const navigate = useNavigate()

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

                <button
                  onClick={() => navigate("/")}
                  className="w-full app-button mb-3 app-elements-height">
                    {
                      translater("introductionPageInformationButton")
                    }
                </button>

                <Form
                  showDoneInterface={() => setDoneInterfaceVisible(true)}/>
              </section>
            </article>
          )
      }
    </main>
  )
}
