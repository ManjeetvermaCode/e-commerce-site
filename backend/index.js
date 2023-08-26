import dotenv from 'dotenv'


import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'


import connectDB from './config/db.js'
import express from "express"//by setting "type":"module" we can use esModule syntax
import {notFound,errorHandler} from './middlewares/errorMiddleware.js'
import cookieParser from 'cookie-parser'



const app=express()
dotenv.config()
connectDB()//initializing the MONGODB instance.
const port=process.env.PORT || 5000




//BODY PARSING MIDDLEWARE. 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//cookieParser
app.use(cookieParser())


app.get('/',(req,res)=>{
    res.send('this is home page')//ultimately this will load our react application.
})

app.use('/api/products',productRoutes)
app.use('/api/user',userRoutes)
app.use('/api/orders',orderRoutes)

app.use(notFound)//if no route matches, this will get called and next() will forward it to next middleware below
app.use(errorHandler)//if another url of castError error of mongose

app.listen(port,()=>{console.log(`listening on port ${port}`)})