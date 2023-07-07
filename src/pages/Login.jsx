import { Navigate } from 'react-router-dom'
import FrmLogin from '../components/FormLogin/FormLogin'
import useSession from '../hooks/useSession'

export default function LoginPage () {
  const { hasLogged } = useSession()
  return hasLogged
    ? <Navigate to={'/home'} />
    : (
      <section className='flex-grow'>
        <FrmLogin/>
      </section>
      )
}
