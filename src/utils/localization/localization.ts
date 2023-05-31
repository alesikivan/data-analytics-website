import { addLocale, localeOption } from 'primereact/api'
import Parser from 'html-react-parser'

import cs from './languages/cs.json'
import en from './languages/en.json'
import { store } from '../../redux/store'
import { RootState } from '../../redux/reducers/rootReducer'

export const setLocalizations = () => {
  // Добавляем английский язык
  addLocale('en', en)
  
  // Добавляем русский язык
  addLocale('cs', cs)
}

export const translater = (key: string) => {
  const { language: { lang } }: RootState = store.getState()

  return Parser( localeOption(key, lang) )
}