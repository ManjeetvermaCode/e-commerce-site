import express from "express";//by setting "type":"module" we can use esModule syntax
const app=express()
const port=5000
import products from './products.js'

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