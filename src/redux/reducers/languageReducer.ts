import { Reducer } from "redux"
import { Action } from "./rootReducer"

export type Languages = 'en' | 'cs'

export type InitialState = {
  lang: Languages | string
}

const initialState: InitialState = {
  lang: 'en'
}

// Set default language
// const language = localStorage.getItem('app-language')
// if (language)
//   initialState.lang = language
// else
//   localStorage.setItem('app-language', 'en')

export const SET_LANGUAGE = "SET_LANGUAGE"

export const languagesReducer: Reducer<InitialState, Action<Languages>> = (
  state = initialState,
  action
): InitialState => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        lang: action.payload
      }

    default:
      return state
  }
}
