import { combineReducers } from 'redux'

import { InitialState as AppInitialState, appReducer } from './appReducer'
import { InitialState as AuthInitialState, authReducer } from './authReducer'
import { InitialState as LanguagesInitialState, languagesReducer } from './languageReducer'
import { InitialState as NotificationsInitialState, notificationsReducer } from './notificationsReducer'
import { InitialState as ThemesInitialState, themesReducer } from './themeReducer'

export type RootState = {
  auth: AuthInitialState,
  app: AppInitialState,
  language: LanguagesInitialState,
  notifications: NotificationsInitialState,
  theme: ThemesInitialState
}

export type Action<T> = {
  type: string,
  payload: T
}

export const rootReducer = combineReducers({
  language: languagesReducer,
  theme: themesReducer,
  notifications: notificationsReducer,
  auth: authReducer,
  app: appReducer
})