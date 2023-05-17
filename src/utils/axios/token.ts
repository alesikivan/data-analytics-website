import axios from 'axios'

export const setAuthToken = (token: string) => {
  if (token) {
    // Применить токен авторизации к каждому запросу, если авторизован
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else {
    // Удаляем header
    delete axios.defaults.headers.common['Authorization']
  }
}