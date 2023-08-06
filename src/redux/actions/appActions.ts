import { store } from '../store'
import { SET_COOKIES_VISIBLE } from '../reducers/appReducer'

export const hideCookies = () => store.dispatch({
  type: SET_COOKIES_VISIBLE,
  payload: false
})