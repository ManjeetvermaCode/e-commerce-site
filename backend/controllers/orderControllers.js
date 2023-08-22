import asyncHandler from '../middlewares/asyncHandler.js'
import Orders from '../models/orderModel.js'

//@desc create new order
//@route POST/orders
//@access Private
const addOrderItems=asyncHandler(async(req,res)=>{
    res.send('add order items')
})

//@desc get logged in user orders
//@route GET/orders/myorders
//@access Private
const getMyOrders=asyncHandler(async(req,res)=>{
    res.send('get my orders')
})

//@desc Get order by ID
//@route GET/orders/:ID
//@access private
const getOrderById=asyncHandler(async(req,res)=>{
    res.send('get order by Id')
})

//@desc update order to paid
//@route GET/orders/:Id/pay
//@access Private
const updateOrderToPaid=asyncHandler(async(req,res)=>{
    res.send('update order to paid')
})

//@desc Update order to delivered
//@route GET/orders/:id/deliver
//@access Private/ADMIN
const updateOrderToDelivered=asyncHandler(async(req,res)=>{
    res.send('update order to delivered')
})

//@desc Get all orders
//@route GET/orders
//@access Private/Admin
const getOrders=asyncHandler(async(req,res)=>{
    res.send('get all orders')
})  

export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    getOrders,
    updateOrderToDelivered,
    updateOrderToPaid
}