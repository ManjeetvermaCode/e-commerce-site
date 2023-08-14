import { configureStore, } from '@reduxjs/toolkit'
import apiSlice  from './slices/apiSlice';
import cartSliceReducer from './slices/cartSlice';
import authSliceReducer from './slices/authSlice';
const store= configureStore({
    reducer: {//this is a global reducer
        [apiSlice.reducerPath]:apiSlice.reducer,//The expression inside the square brackets [ ] is evaluated, and its result is used as the key for the new object property. 'apiSlice' is a reducer provided by createApi.  
        cart:cartSliceReducer,
        auth:authSliceReducer

      },
      

      middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),// This is an arrow function that takes getDefaultMiddleware as a parameter and returns a modified array of middleware.
      devTools:true,
})
// console.log(reducerPath)
//       console.log(apiSlice.reducer)
export default store;