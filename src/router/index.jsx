import { createBrowserRouter } from 'react-router-dom'

import LayoutPage from '../layouts/LayoutPage'

import Landing from '../pages/Landing'
import Home from '../pages/Home'
import About from '../pages/About'
import Detail from '../pages/Detail'
import Error from '../pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPage/>,
    errorElement: <Error/>,
    children: [
      { path: '/', element: <Landing/> },
      { path: '/home', element: <Home /> },
      { path: '/detail:id', element: <Detail/> },
      { path: '/about', element: <About/> }
    ]
  }

])

export default router
