import apiSlice from './apiSlice'
import { ORDERS_URL } from '../constants'

const orderSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        CreateOrder:builder.mutation({
            query:(orders)=>({
                
                url:ORDERS_URL,
                method:'POST',
                body:{...orders}//reason for not sending direct data(pass by reference ) as changes made in the req.body will effect the data in the cartItems and vice versa
            })
        })
    })
})

export const {useCreateOrderMutation}=orderSlice