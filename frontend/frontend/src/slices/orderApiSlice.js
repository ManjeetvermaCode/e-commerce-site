import apiSlice from './apiSlice'
import { ORDERS_URL } from '../constants'

const orderSlice=apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        createOrder:builder.mutation({
            query:(orders)=>({
                url:ORDERS_URL,
                method:'POST',
                body:orders
            })
        })
    })
})

export const {usecreateOrderMutation}=orderSlice