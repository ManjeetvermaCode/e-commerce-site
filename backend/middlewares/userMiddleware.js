import jwt from 'jsonwebtoken'
import asyncHandler from './asyncHandler.js'
import User from '../models/userModel.js'

 const protect=asyncHandler(async(req,res,next)=>{
        let token=req.cookies.jwt//reads the Jwt from cookie
        if(token){
            try {
            const decoded=jwt.verify(token,process.env.JWT_SECRET)//this will return userId, as we had stored previously
            req.user=await User.findById(decoded.userId).select('-password')//-password means to exclude the password from the document. req.user will provide access to user everywhere
            next()
            } catch (error) {
                console.log(error)
                res.status(401)
                throw new Error('Not authorized')
            }
    
        }
        else{
            res.status(401)
            throw new Error('token not found')
        }
    }
)

//admin middleware

const Admin=(req,res,next)=>{
    if(req.user && req.user.isAdmin===true){
        next()
    }
    else{
        res.status(401)
        throw new Error('you are not authorized to accesss feature')
    }
    
}

export {protect,Admin}