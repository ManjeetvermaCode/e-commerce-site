import dotenv from 'dotenv'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/db.js'
import express from "express"//by setting "type":"module" we can use esModule syntax
import cors from 'cors'
import {notFound,errorHandler} from './middlewares/errorMiddleware.js'

const app=express()
dotenv.config()
connectDB()//initializing the MONGODB instance.
const port=process.env.PORT || 5000
app.use(cors())





app.get('/',(req,res)=>{
    res.send('this is home page')//ultimately this will load our react application.
})

app.use('/products',productRoutes)
app.use('/user',userRoutes)

app.use(notFound)//if no route matches, this will get called and next() will forward it to next middleware below
app.use(errorHandler)//if another url of castError error of mongose

app.listen(port,()=>{console.log(`listening on port ${port}`)})