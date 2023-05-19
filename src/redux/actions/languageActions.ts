import { Languages, SET_LANGUAGE } from "../reducers/languageReducer"
import { Action } from "../reducers/rootReducer"
import { store } from "../store"

export const setEnglishLanguage = () => {
  const language: Action<Languages> = {
    type: SET_LANGUAGE,
    payload: 'en'
  }

  localStorage.setItem('app-language', 'en')

  return store.dispatch(language)
}

export const setCzechLanguage = () => {
  const language: Action<Languages> = {
    type: SET_LANGUAGE,
    payload: 'cs'
  }

  localStorage.setItem('app-language', 'cs')

  return store.dispatch(language)
}
