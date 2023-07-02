import {  useSelector } from 'react-redux'
import { locale } from 'primereact/api'
import { updateLocaleOptions } from 'primereact/api'

import { Pages } from './shared/pages/Pages'

import { Notifications } from './shared/components/particals/notifications/Notifications'
import { RootState } from './redux/reducers/rootReducer'
import { appUnilsInit } from './utils/initialization/app'

import './App.scss'
import { useEffect, useReducer } from 'react'
import { API } from './api'

(async function () { await appUnilsInit() })()

export const App = () => {    
  const [_, forceUpdate] = useReducer((x) => x + 1, 0)

  // Устанавливаем язык приложения
  const { lang } = useSelector((state: RootState) => state.language)
  locale(lang)

  useEffect(() => {
    const loadLanguages = async () => {
      const { data: { cs, en } } = await API.getLanguages()

      updateLocaleOptions(cs, 'cs')
      updateLocaleOptions(en, 'en')

      forceUpdate()
    }

    loadLanguages()
  }, [])

  return (
    <>
      <Notifications />
      <Pages />
    </>
  )
}
