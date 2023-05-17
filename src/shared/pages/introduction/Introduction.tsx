import { useState } from "react"
import { SuccessfullySaved } from "./components/SuccessfullySaved"
import { images } from "../../../assets/images/imgs"
import { Form } from "./components/form/Form"

import '../../../assets/styles/css/pages/introduction.css'
import { useNavigate } from "react-router-dom"

export const Introduction = () => {
  const [doneInterfaceVisible, setDoneInterfaceVisible] = useState(false)
  const novigat = useNavigate()

  return (
    <main className="introduction">

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
                  Welcome to Data Analytics Program!
                </h1>

                <button
                  onClick={() => novigat("/")}
                  className="w-full border-round-md app-color-border p-2 mb-3 app-font-bold app-color app-hover"
                  style={{background: "none"}}>
                    Full information about Data Analytics programme
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
