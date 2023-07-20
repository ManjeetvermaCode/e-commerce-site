import mongoose from "mongoose";
const Schema=mongoose.Schema;

const reviewSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"//Refers to User Schema
    },
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    comment:{
        type:String,
        required:true
    }

},{
    timestamps:true
})

const ProductSchema=new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"//Refers to User Schema
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    reviews:[reviewSchema],
    rating:{
        type:Number,
        default:0,
        required:true
    },
    numReviews:{
        type:Number,
        required:true,
        default:0
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    countInStock:{
        type:Number,
        rquired:true,
        default:0
    },
    
},{
    timestamps:true//he timestamps: true option in Mongoose schema is defined separately to automatically manage the createdAt and updatedAt fields, providing the timestamp of when a document is created and last updated. 
})
const product = mongoose.model("Product",ProductSchema)
export default product