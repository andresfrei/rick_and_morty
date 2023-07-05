import { Navigate, Outlet } from 'react-router-dom'
import useSession from '../../hooks/useSession'

const ProtectedRoute = ({ children, redirectTo = '/' }) => {
  const { session } = useSession()
  return session.status !== 2 ? <Navigate to={redirectTo} /> : (children || <Outlet />)
}

export default ProtectedRoute
