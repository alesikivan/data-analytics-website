import { Reducer } from "redux"

const cookiesVisible = localStorage.getItem('user-cookies')

export type InitialState = {
  cookiesVisible: boolean
}

const initialState: InitialState = {
  cookiesVisible: Boolean(!cookiesVisible) 
}

export const SET_COOKIES_VISIBLE = 'SET_COOKIES_VISIBLE'

export const appReducer: Reducer<InitialState> = (state = initialState, action) => {
  switch (action.type) {
    case SET_COOKIES_VISIBLE:
      return {
        ...state,
        cookiesVisible: action.payload,
      }

    default:
      return state
  }
}
