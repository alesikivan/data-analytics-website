import { Action } from "../reducers/rootReducer"
import { SET_DARK_MODE } from "../reducers/themeReducer"
import { store } from "../store"

export const setDarkMode = (mode: boolean) => {
  const settings: Action<boolean> = { type: SET_DARK_MODE, payload: mode }

  return store.dispatch(settings)
}