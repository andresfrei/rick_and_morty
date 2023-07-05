import { Navigate, Outlet } from 'react-router-dom'
import useSession from '../../hooks/useSession'

export default function ProtectedRoute ({ children, redirectTo = '/' }) {
  const { hasLogged } = useSession()
  return !hasLogged ? <Navigate to={redirectTo} /> : (children || <Outlet />)
}
