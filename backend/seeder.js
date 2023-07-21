import colors from 'colors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import User from './models/userModel.js'

import products from './data/products.js'
import users from './data/users.js'


dotenv.config()
connectDB()

const importData=async()=>{
    try {
        await Product.deleteMany({})
        await Order.deleteMany({})
        await User.deleteMany({})

        const createdUser=await User.insertMany(users)

        const adminUser=createdUser[0]._id

       const sampleProducts= products.map((p)=>{
            return {...p,user:adminUser}//in addition to all the fields, products will have a 'user' field which initially holds same admin(_id) for all seed products.
        })

        await Product.insertMany(sampleProducts)
        console.log('Data Imported Successfully')
        process.exit()

    } catch (error) {
        console.log(`${error}`.red)
        process.exit(1)//retrun from current node application with error status.
    }
}
products
const destroy=async()=>{
    await Product.deleteMany({})
    await Order.deleteMany({})
    await User.deleteMany({})

    console.log('successfully destroyed the database congrats')
    process.exit(1)
}

if(process.argv[2]==='-d'){
    destroy()

}else{
    importData()
}

