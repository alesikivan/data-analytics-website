import { Navigate, Outlet } from 'react-router-dom'
import { adminPermission } from '../../../redux/actions/authActions'

export const AdminRoute = () => {
  const admin = adminPermission()

  return admin ? <Outlet /> : <Navigate to='/' />;
}