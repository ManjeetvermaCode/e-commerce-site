import express from 'express'
const router= express.Router()
import asyncHandler from '../middlewares/asyncHandler.js'
import Product from '../models/productModel.js'
// import products from '../data/products.js'


router.get('/',asyncHandler(async(req,res)=>{
    try {
        const products=await Product.find({})
        res.json(products)
    } catch (error) {
        console.log(error)
    }

}))

router.get('/:id',asyncHandler(async(req,res)=>{
    const {id}=req.params
    const product=await Product.findById(id)
    res.json(product)
}))

export default router