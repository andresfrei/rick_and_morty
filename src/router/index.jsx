import { createBrowserRouter } from 'react-router-dom'

import LayoutPage from '../layouts/LayoutPage'

import Home from '../pages/Home'
import About from '../pages/About'
import Detail from '../pages/Detail'
import Error from '../pages/Error'
import Login from '../pages/Login'
import Landing from '../pages/Landing'

const router = createBrowserRouter([
  { path: '/login', element: <Login/> },
  { path: '/about', element: <About/> },
  {
    path: '/',
    element: <LayoutPage/>,
    errorElement: <Error/>,
    children: [
      { path: '/', element: <Landing /> },
      { path: '/home', element: <Home /> },
      { path: '/detail:id', element: <Detail/> }
    ]
  }

])

export default router
