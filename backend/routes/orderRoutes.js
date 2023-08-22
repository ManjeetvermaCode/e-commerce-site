import express from 'express'
const router= express.Router()

import {protect,Admin} from '../middlewares/userMiddleware.js'

import {

    addOrderItems,
    getMyOrders,
    getOrderById,
    getOrders,
    updateOrderToDelivered,
    updateOrderToPaid
} from '../controllers/orderControllers.js'


router.route('/').post(protect,addOrderItems).get(protect,getOrders)
router.route('/mine').get(protect,getMyOrders)
router.route('/:id').get(protect,Admin,getOrderById)
router.route('/:id/pay').put(protect,updateOrderToPaid)
router.route('/:id/deliver').put(protect,Admin,updateOrderToDelivered)

export default router