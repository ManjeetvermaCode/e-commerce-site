import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import HomeScreen from './screens/home-screen.jsx'
import ProductScreen from './screens/product-screen.jsx'
import CartScreen from './screens/cart-screen.jsx'
import LoginScreen from './screens/login-screen.jsx'
import RegisterScreen from './screens/register-screen.jsx'
import ShippingScreen from './screens/shipping-screen.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css'

import store from './store.js'
import  {Provider}  from 'react-redux'

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/' element={<HomeScreen/>}/>
      {/*index 'true' sets the default or index route */}
      <Route  path='/product/:id' element={<ProductScreen/>}/>
      <Route path='/cart' element={<CartScreen/>}/>
      <Route path='/login' element={<LoginScreen/>}/>
      <Route path='/register' element={<RegisterScreen/>}/>
      <Route path='/shipping' element={<ShippingScreen/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> {/*integrate Redux with React. It enables the application to access the Redux store from any component in the component tree without the need to pass it explicitly as props.  */}
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
