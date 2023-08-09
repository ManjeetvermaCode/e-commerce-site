import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const Schema=mongoose.Schema

const userSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,

    },
    isAdmin:{
        type:Boolean,
        default:false,
        required:true,
    }
},{
    timestamps:true
})

userSchema.methods.comparePassword=async(password)=>{
    return await bcrypt.compare(password,this.password)
}

const User=mongoose.model('User',userSchema)
export default User;

