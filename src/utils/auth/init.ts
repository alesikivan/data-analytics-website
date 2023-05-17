import jwt_decode from 'jwt-decode'

import { logout, setCurrentUser } from '../../redux/actions/authActions'
import { setAuthToken } from '../axios/token'
import { User } from '../../redux/reducers/authReducer'
import { store } from '../../redux/store'

export const authInit = () => {
  const token = localStorage.getItem('token')
  
  if (token) {
    // Присваиваем token в auth хедер
    setAuthToken(token)

    // Парсим токен пользователя
    const decoded: User = jwt_decode(token)

    // Авторизируем пользователя
    store.dispatch(setCurrentUser(decoded))

    // Получаем время в секундах
    const currentTime = Date.now() / 1000

    if (decoded.exp < currentTime) {
      // Выбрасываем пользователя из системы
      logout()

      // Редирект на логин
      window.location.href = "./login"
    }
  }
}