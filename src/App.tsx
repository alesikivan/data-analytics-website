import {  useSelector } from 'react-redux'
import { locale } from 'primereact/api'

import { Pages } from './shared/pages/Pages'

import { Notifications } from './shared/components/particals/notifications/Notifications'
import { RootState } from './redux/reducers/rootReducer'
import { appUnilsInit } from './utils/initialization/app'

import './App.scss'

appUnilsInit()

export const App = () => {    
  // Устанавливаем язык приложения
  const { lang } = useSelector((state: RootState) => state.language)
  locale(lang)

  return (
    <>
      <Notifications />
      <Pages />
    </>
  )
}
