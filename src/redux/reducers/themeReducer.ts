import { Reducer } from "redux"
import { Action } from "./rootReducer"

export type InitialState = {
  isDarkMode: boolean
}

const initialState: InitialState = {
  isDarkMode: false
}

export const SET_DARK_MODE = 'SET_DARK_MODE'

export const themesReducer: Reducer<InitialState, Action<boolean>> = (
  state = initialState,
  action
): InitialState => {
  switch (action.type) {
    case SET_DARK_MODE:
      return {
        ...state,
        isDarkMode: action.payload
      }

    default:
      return state
  }
}
