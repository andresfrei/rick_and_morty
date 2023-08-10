import { useEffect } from 'react'
import { Outlet, useNavigation } from 'react-router-dom'
import useLocalStorage from '../hooks/useLocalStorage'

import Navbar from '../components/Navbar/Navbar'
import useError from '../hooks/useError'
import ErrorBox from '../components/ErrorBox/ErrorBox'
import useLoader from '../hooks/useLoader'

import Loader from '../pages/Loader'

export default function Layout () {
  const { loadLocalStorage } = useLocalStorage()
  const { hasErrors } = useError()
  const { loader } = useLoader()
  const navigation = useNavigation()

  useEffect(() => loadLocalStorage(), [])

  return (
    <div className='layout-container'>
      { (navigation.state === 'loading' || loader) && <Loader/> }
      <Navbar/>
      <main className='flex-grow'>
        <Outlet/>
      </main>
      {hasErrors && <ErrorBox/>}
    </div>

  )
}
