import {  useSelector } from 'react-redux'
import { locale } from 'primereact/api'
import { updateLocaleOptions } from 'primereact/api'
import ReactGA from 'react-ga'
import { useLocation } from 'react-router-dom'

import { Pages } from './shared/pages/Pages'

import { Notifications } from './shared/components/particals/notifications/Notifications'
import { RootState } from './redux/reducers/rootReducer'
import { appUnilsInit } from './utils/initialization/app'

import './App.scss'
import { useEffect, useReducer } from 'react'
import { API } from './api'

ReactGA.initialize('G-Y1S57BYLGP');

// Обертка для отслеживания переходов между страницами
function TrackPageViews() {
  const location = useLocation()

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search)
  }, [location])

  return null
}

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
      <TrackPageViews /> 
      <Pages />
    </>
  )
}
