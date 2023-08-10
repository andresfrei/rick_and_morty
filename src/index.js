import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import ParticlesBackgraund from './components/ParticlesBackgraund/ParticlesBackgraund'
import './index.css'
import router from './router'

// Redux
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <body>
      <ParticlesBackgraund/>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    </body>
  </React.StrictMode>
)
