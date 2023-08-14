import { useEffect, useRef, useState } from "react"
import { Button } from "primereact/button"
import { useNavigate } from "react-router-dom"
import { InputText } from "primereact/inputtext"
import { InputTextarea } from 'primereact/inputtextarea'
import { Toast } from "primereact/toast"
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog'

import { API } from "../../../../api"
import { logout } from "../../../../redux/actions/authActions"
import { AxiosResponse } from "axios"
import { MessageServerResponse } from "../../../../api/interfaces"
import { successNotification } from "../../../../redux/actions/notificationsActions"

export const Editor = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [activeBoxKey, setActiveBoxKey] = useState('')
  const [finder, setFinder] = useState('')
  const toast = useRef<Toast>(null)

  const [translation, setTranslation] = useState({ cs: null, en: null })
  const [keys, setKeys] = useState<string[]>([])

  const signOut = () => {
    logout()
    navigate('/')
  }

  useEffect(() => {
    const loadLanguages = async () => {
      const { data } = await API.getLanguages()

      setTranslation(data)

      const dirtyKeys = Object.keys(data.en)
      // Выбираем только элементы, у которых значения – это строки
      const filtedKeys = dirtyKeys.filter(key => typeof data.en[key] === 'string')

      setKeys(filtedKeys)
    }

    loadLanguages()
  }, [])

  const setEnglishUpdate = (key: string, value: string) => {
    setActiveBoxKey(key)
    const translationClone = JSON.parse(JSON.stringify(translation.en))

    translationClone[key] = value

    setTranslation((prev => ({ ...prev, en: translationClone })))
  }

  const setCzechUpdate = (key: string, value: string) => {
    setActiveBoxKey(key)
    const translationClone = JSON.parse(JSON.stringify(translation.cs))

    translationClone[key] = value

    setTranslation((prev => ({ ...prev, cs: translationClone })))
  }

  const saveData = (data: Object) => {
    setLoading(true)

    API.setLanguages(data)
      .then((response: AxiosResponse<MessageServerResponse>) => {
        const { message } = response.data

        successNotification(message)

        setLoading(false)
      })
      .catch((error) => setLoading(false))
  }

  const saveChanges = () => {
    confirmDialog({
      className: "w-30rem",
      message: 'I am sure that all the data I entered is correct. I closed all the markup tags and checked the correct spelling of the text.',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => saveData(translation),
      reject: () => { }
    })
  }

  return (
    <main className="flex flex-column gap-4">
      <nav className="w-full flex justify-content-between align-items-center gap-2">
        <Button
          style={{ whiteSpace: 'nowrap' }}
          className="p-button-success p-button-sm w-13rem app-button-colors"
          onClick={saveChanges}
          loading={loading}
          label="Save Changes" />

        <span className="p-input-icon-left w-full">
          <i className="pi pi-search" />
          <InputText
            value={finder}
            onChange={(e) => setFinder(e.target.value)}
            placeholder="Search in EN and CS"
            className="p-inputtext-sm w-full app-font" />
        </span>

        <Button
          style={{ whiteSpace: 'nowrap' }}
          className="p-button-outlined p-button-secondary p-button-sm w-8rem"
          onClick={signOut}
          label="Log out" />
      </nav>

      <article className="flex flex-column gap-5">
        {
          keys
            .filter(key => {
              const enValue = translation.en ? translation.en[key] : ''
              const csValue = translation.cs ? translation.cs[key] : ''

              const finderIncluding = enValue.toLowerCase().includes(finder.toLowerCase())
                || csValue.toLowerCase().includes(finder.toLowerCase())
                || key.toLowerCase().includes(finder.toLowerCase())

              const isKeyMaching = key === activeBoxKey

              return finderIncluding || isKeyMaching

            })
            .map((key, index) => {
              return (
                <section key={index} className="flex flex-column gap-2">
                  <span className="app-color app-font-bold">{key}</span>

                  <div className="editor-area">
                    <span className="editor-area-label">EN</span>

                    <InputTextarea
                      className="editor-textarea en-editor-textarea"
                      placeholder="EN"
                      value={translation.en ? translation.en[key] : ''}
                      onChange={(e) => setEnglishUpdate(key, e.target.value)} rows={2} />
                  </div>

                  <div className="editor-area">
                    <span className="editor-area-label">CS</span>

                    <InputTextarea
                      placeholder="CS"
                      className="editor-textarea cs-editor-textarea"
                      value={translation.cs ? translation.cs[key] : ''}
                      onChange={(e) => setCzechUpdate(key, e.target.value)} rows={2} />
                  </div>
                </section>
              )
            })
        }
      </article>

      <Toast ref={toast} />
      <ConfirmDialog />
    </main>
  )
}