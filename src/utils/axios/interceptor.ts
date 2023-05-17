import axios, { AxiosError, AxiosResponse } from "axios"

import { errorNotification } from "../../redux/actions/notificationsActions"
import { logout } from "../../redux/actions/authActions"
import { MessageServerResponse } from "../../api/interfaces"
import { translater } from "../localization/localization"

export const initInterceptor = () => {
  axios.interceptors.response.use(
    // При успешном response
    (response: AxiosResponse) => response,
    // При response с ошибкой
    (error: AxiosError<MessageServerResponse>) => {
      const status = error?.response?.status
      const message = error?.response?.data.message

      const invalidServer = translater("interceptorErrorNotificationServer").toString()
      const accessDenied = translater("interceptorErrorNotification").toString()
      const notFound = translater("interceptorErrorNotification404").toString()

      // Доступ закрыт
      if (status && [403].includes(status)) {
        const msg = message || accessDenied

        errorNotification(msg)
        return setTimeout(() => window.location.replace("/"), 1000)
      }

      // Выйти из системы если вышла сессия
      if (status && [401].includes(status)) logout()

      // Страница не существует
      if (status && [404].includes(status))
        return errorNotification(message || notFound)

      // Показываем ошибку
      errorNotification(message ? message : invalidServer)

      return Promise.reject(error)
    }
  )
}
