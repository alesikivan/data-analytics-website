import { useState } from "react"
import { SuccessfullySaved } from "./components/SuccessfullySaved"
import { images } from "../../../assets/images/imgs"
import { Form } from "./components/form/Form"

import '../../../assets/styles/css/pages/introduction.css'

export const Introduction = () => {
  const [doneInterfaceVisible, setDoneInterfaceVisible] = useState(false)

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
                
                <Form
                  showDoneInterface={() => setDoneInterfaceVisible(true)}/>
              </section>
            </article>
          )
      }
    </main>
  )
}