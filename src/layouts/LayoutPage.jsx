import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import useError from '../hooks/useError'
import ErrorBox from '../components/ErrorBox.js/ErrorBox'

export default function Layout () {
  const { hasError } = useError()
  return (
    <main className='page-container'>
      <Navbar/>
      <Outlet/>
      {hasError && <ErrorBox/>}
    </main>

  )
}
