import { addLocale, localeOption } from 'primereact/api'
import Parser from 'html-react-parser'

import { store } from '../../redux/store'
import { RootState } from '../../redux/reducers/rootReducer'
import { API } from '../../api'

export const setLocalizations = async () => {
  // Загружаем перевод приложения  
  // const { data: { cs, en } } = await API.getLanguages()

  // Добавляем английский язык
  addLocale('en', {})
  
  // Добавляем чешский язык
  addLocale('cs', {})
}

export const translater = (key: string) => {
  const { language: { lang } }: RootState = store.getState()

  const locale = localeOption(key, lang)
  return locale ? Parser( localeOption(key, lang) ) : ''
}