import { Reducer } from 'redux'
import { Action } from './rootReducer'
import { MongoId } from '../../api/interfaces'

export type UserRole = 'User' | 'Supervisor' | 'Administrator'

export type Role = {
  _id: MongoId,
  title: UserRole
}

export type User = {
  id: string,
  login: string,
  exp: number,
  iat: number,
  roles: Role[]
}

export type InitialState = {
  isAuthenticated: boolean,
  user: null | User
}

const initialState = {
  isAuthenticated: false,
  user: null
}

export const SET_CURRENT_USER = 'SET_CURRENT_USER'

export const authReducer: Reducer<InitialState, Action<User | null>> = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.payload,
        user: action.payload,
      }
    default:
      return state
  }
}