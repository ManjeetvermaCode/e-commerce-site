import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js'
import express from "express"//by setting "type":"module" we can use esModule syntax
import cors from 'cors'

const app=express()
dotenv.config()
connectDB()//initializing the MONGODB instance.
const port=process.env.PORT || 5000
app.use(cors())





app.get('/',(req,res)=>{
    res.send('this is home page')//ultimately this will load our react application.
})

app.use('/products',productRoutes)

app.listen(port,()=>{console.log(`listening on port ${port}`)})