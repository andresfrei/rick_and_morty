import { Navigate, Outlet } from 'react-router-dom'
import useSession from '../../hooks/useSession'

const ProtectedRoute = ({ children, redirectTo = '/login' }) => {
  const { id } = useSession()
  return !id ? <Navigate to={redirectTo} /> : (children || <Outlet />)
}

export default ProtectedRoute
