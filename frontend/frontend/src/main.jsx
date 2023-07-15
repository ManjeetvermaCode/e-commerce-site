import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import HomeScreen from './home-screen.jsx'
import ProductScreen from './product-screen.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomeScreen/>}/>
      {/*index 'true' sets the default or index route */}
      <Route  path='/product/:id' element={<ProductScreen/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
