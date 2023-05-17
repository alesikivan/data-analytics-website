import axios from 'axios'

import { RootState } from '../../redux/reducers/rootReducer'
import { store } from '../../redux/store'

export const setLanguage = () => {
  // Устанавливаем язык по умолчанию
  const { language: { lang } }: RootState = store.getState()
  axios.defaults.headers.common['Accept-Language'] = lang

  // Подписываемся на изменение языка
  setLanguageSubscribe()
}

function setLanguageSubscribe() {
  store.subscribe(() => {
    const { language: { lang } }: RootState = store.getState()
    axios.defaults.headers.common['Accept-Language'] = lang
  })
}