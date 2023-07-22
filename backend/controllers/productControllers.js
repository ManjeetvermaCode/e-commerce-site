import asyncHandler from '../middlewares/asyncHandler.js'
import Product from '../models/productModel.js'

const getAllProducts=asyncHandler(async(req,res)=>{
    try {
        const products=await Product.find({})
        res.json(products)
    } catch (error) {
        res.status('200')
        throw new Error ('somenting went wrong')
    }
})

const getProductById=asyncHandler(async(req,res)=>{
    try {
        const {id}=req.params
    const product=await Product.findById(id)
   return res.json(product)
        
    } catch (error) {
        res.status(404)
        throw new Error('Resource not found')
    }
})

export {getAllProducts,getProductById}