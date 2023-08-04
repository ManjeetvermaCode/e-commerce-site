import { configureStore, } from '@reduxjs/toolkit'
import apiSlice  from './slices/apiSlice';
const store= configureStore({
    reducer: {
        [apiSlice.reducerPath]:apiSlice.reducer//The expression inside the square brackets [ ] is evaluated, and its result is used as the key for the new object property. 'apiSlice' is a reducer provided by createApi.  
      },
      

      middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),// This is an arrow function that takes getDefaultMiddleware as a parameter and returns a modified array of middleware.
      devTools:true,
})
// console.log(reducerPath)
//       console.log(apiSlice.reducer)
export default store;