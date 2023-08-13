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

userSchema.methods.comparePassword=async(password)=>{//method is used for adding method to the schema
    return await bcrypt.compare(password,password)
}

userSchema.pre('save',async function (next){// a pre-save hook is a piece of code that runs before saving a user's data to the database
    if(!this.isModified('password')){//. If the password hasn't been modified, the code skips the hashing process and moves to the next step,
        next()
    }
    this.password=await bcrypt.hash(this.password,10)
})

const User=mongoose.model('User',userSchema)

export default User;

