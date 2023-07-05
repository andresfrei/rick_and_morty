import { createBrowserRouter } from 'react-router-dom'

import LayoutPage from '../layouts/LayoutPage'

import Home from '../pages/Home'
import About from '../pages/About'
import Detail from '../pages/Detail'
import Landing from '../pages/Landing'
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute'

import Error from '../pages/Error'

const router = createBrowserRouter([

  {
    path: '/',
    element: <LayoutPage/>,
    children: [
      {
        path: '/',
        element: <Landing/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/',
        element: <ProtectedRoute/>,
        errorElement: <Error/>,
        children: [
          { path: '/home', element: <Home /> },
          { path: '/detail:id', element: <Detail/> }
        ]
      }
    ]
  }
])

export default router
