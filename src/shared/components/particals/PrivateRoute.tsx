import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/reducers/rootReducer';

export const PrivateRoute = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth)

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}