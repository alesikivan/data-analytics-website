import { store } from "../store"
import { Notification, NotificationsAction, REMOVE_NOTIFICATION, SET_NOTIFICATION } from "../reducers/notificationsReducer"

const notificationLife = 3000

export const setNotification = (params: Notification) => {
  const notification: NotificationsAction<Notification> = {
    type: SET_NOTIFICATION,
    payload: params
  }

  // Чистим предыдущие уведомления
  removeNotification()

  return store.dispatch(notification)
}

export const removeNotification = () => {
  const notification = {
    type: REMOVE_NOTIFICATION
  }

  return store.dispatch(notification)
}

export const successNotification = (message: string) => {
  const params: Notification = {
    severity: 'success',
    summary: 'Success',
    detail: message,
    life: notificationLife
  }

  setNotification(params)
}

export const errorNotification = (message: string) => {
  const params: Notification = {
    severity: 'error',
    summary: 'Error',
    detail: message,
    life: notificationLife
  }

  setNotification(params)
}

export const infoNotification = (message: string) => {
  const params: Notification = {
    severity: 'info',
    summary: 'Info',
    detail: message,
    life: notificationLife
  }

  setNotification(params)
}