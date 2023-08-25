import asyncHandler from '../middlewares/asyncHandler.js'
import Orders from '../models/orderModel.js'

//@desc create new order
//@route POST/orders
//@access Private
const addOrderItems=asyncHandler(async(req,res)=>{
    const {
        orderItems,
        shippingAddress,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paymentMethod

    }=req.body
    console.log(req.user)
    console.log(shippingAddress)

    if(orderItems && orderItems.length===0){
        res.status(401)
        throw new Error('No item in the cart')
    }
    else{
        // const orders=new Orders({
        //     orderItems:orderItems.map((x)=>({   //returning an object
        //         ...x,
        //         product_id:x._id,
        //         _id:undefined
        //     })),//inserting an object id to each item of the items.
        //     user:req.user._id,//comming from createtoken.js
        //     shippingAddress,
        //     paymentMethod,
        //     itemsPrice,
        //     taxPrice,
        //     shippingPrice,
        //     totalPrice,
        // })
        const address=new Orders({shippingAddress})
        const createdOrder=await address.save()
        console.log(createdOrder)
       
    }
    
})

//@desc get logged in user orders
//@route GET/orders/myorders
//@access Private
const getMyOrders=asyncHandler(async(req,res)=>{
    const allOrders=await Orders.find({user:req.user._id})
    res.status(201).json(allOrders)
})

//@desc Get order by ID
//@route GET/orders/:ID
//@access private
const getOrderById=asyncHandler(async(req,res)=>{
    const order=await Order.findById(req.params.id).populate('user','name email')

    if(order){
        res.status(201).json(order)
    }
    else{
        res.status(401)
        throw new Error('Order not Found')
    }
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