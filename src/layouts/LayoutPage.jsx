import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import useError from '../hooks/useError'
import ErrorBox from '../components/ErrorBox.js/ErrorBox'

export default function Layout () {
  const { hasError } = useError()
  return (
    <body className='layout-container'>
      <Navbar/>
      <main className='flex'>
        <Outlet/>
        {hasError && <ErrorBox/>}
      </main>
    </body>

  )
}
