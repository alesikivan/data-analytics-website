import jwt_decode from 'jwt-decode'
import { SET_CURRENT_USER, User, UserRole } from '../reducers/authReducer'
import { successNotification } from './notificationsActions'

import { store } from '../store'
import { AxiosResponse } from 'axios'
import { setAuthToken } from '../../utils/axios/token'
import { API } from '../../api'
import { Role } from '../reducers/authReducer'
import { LoginRequest, LoginServerResponse } from '../../api/interfaces'

// Логин - получение токена пользователя
export const login = (data: LoginRequest) => {
  return API.login(data)
    .then((res: AxiosResponse<LoginServerResponse>) => {
      // Заносим токен в localStorage
      const { token, message } = res.data
      localStorage.setItem('token', token)

      // Присваиваем токен в Auth header
      setAuthToken(token)

      // Парсим токен и получаем пользователя
      const decoded: User = jwt_decode(token)

      store.dispatch(setCurrentUser(decoded))

      successNotification(message)
    })
}

// Вернет true, если роли совпали
export const compareRoles = (rolesList: UserRole[]): boolean => {
  const { auth: { user } } = store.getState()

  if (user) {
    const { roles } = user

    if (user.roles.length === 0) return false

    for (let i = 0; i < rolesList.length; i++) {
      const element = rolesList[i]

      if (roles.find((role: Role) => element === role.title))
        return true
    }
  }

  // Если роли не совпали
  return false
}

export const adminPermission = (): boolean => {
  const roles: UserRole[] = ['Administrator']

  return compareRoles(roles)
}

// Присвоение пользователя
export const setCurrentUser = (decoded: User | null) =>
  ({ type: SET_CURRENT_USER, payload: decoded })

// Выход из системы
export const logout = () => {
  localStorage.removeItem('token')

  // Удаление auth header в последующих запросах
  setAuthToken('')

  store.dispatch(setCurrentUser(null))
}