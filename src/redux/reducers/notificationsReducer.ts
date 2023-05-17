import { ReactNode } from "react"
import { Reducer } from "redux"

/*
    Notification example:
    { 
        severity: 'success', 
        summary: 'Success', 
        detail: 'Message Content', 
        life: 3000
    }
*/

export interface Notification {
  severity: 'success' | 'error' | 'info',
  summary: 'Success' | 'Error' | 'Info',
  detail: string | ReactNode,
  life: number
}

export type InitialState = {
  list: Notification[]
}

export type NotificationsAction<T> = {
  type: string,
  payload?: T
}

const initialState: InitialState = {
  list: []
}

export const SET_NOTIFICATION = "SET_NOTIFICATION"
export const REMOVE_NOTIFICATION = "REMOVE_NOTIFICATION"

export const notificationsReducer: Reducer<InitialState, NotificationsAction<Notification>> = (
  state = initialState,
  action
): InitialState => {
  switch (action.type) {
    case SET_NOTIFICATION:
      return {
        ...state,
        list: action.payload ? [...state.list, action.payload] : state.list
      }

    case REMOVE_NOTIFICATION:
      return {
        ...state,
        list: state.list.slice(0, -1)
      }

    default:
      return state
  }
}
