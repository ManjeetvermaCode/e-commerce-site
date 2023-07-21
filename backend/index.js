import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import express from "express";//by setting "type":"module" we can use esModule syntax
import products from './data/products.js'
import cors from 'cors'
const port=process.env.PORT || 5000
const app=express()
connectDB()//initializing the MONGODB instance.
app.use(cors())

app.get('/',(req,res)=>{
    res.send('this is home page')//ultimately this will load our react application.
})

app.get('/products',(req,res)=>{
    res.json(products)
})

app.get('/products/:id',(req,res)=>{
    const {id}=req.params
    const product=products.find((p)=> p._id===id)
    res.json(product)
})

app.listen(port,()=>{console.log(`listening on port ${port}`)})