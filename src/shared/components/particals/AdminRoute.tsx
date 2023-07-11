import { Navigate, Outlet } from 'react-router-dom'
import jwt_decode from 'jwt-decode'

import { User } from '../../../redux/reducers/authReducer'

export const AdminRoute = () => {
  const token = localStorage.getItem('token')

  let adminPermission = false

  if (token) {
    const decoded: User = jwt_decode(token)

    const role = decoded.roles.find(role => role.title === 'Administrator')

    adminPermission = !!role
  }

  return adminPermission ? <Outlet /> : <Navigate to={'/login'} />
}