import asyncHandler from '../middlewares/asyncHandler.js'
import User from '../models/userModel.js'
import bcrypt from 'bcrypt'

import createToken from '../utils/createToken.js'

// @desc Auth user & get token
// @route POST /user/login
// @access Public
const authUser=asyncHandler(async(req,res)=>{

    const {email,password}=req.body
    
    const user=await User.findOne({email})
    if(user && user.comparePassword(password)){
    
        createToken(res,user._id)


        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin
        })
    }
    else{
        res.status(403).json('cannot find the user')
    }
 
})

// @desc Register User
// @route POST /users
// @access Public
const registerUser=asyncHandler(async(req,res)=>{
    const {email,name,password}=req.body
    const userExist= await User.findOne({email})

    if(userExist){
        res.status(400)
        throw new Error('Invalid Credentials')
    }
    const user=await User.create({email,name,password})

    if(user){
        createToken(res,user._id)
        res.status(201).json(
            {
                _id:user._id,
                name:user.name,
                email:user.email,
                isAdmin:user.isAdmin,
            }
        )
    }
    else{
        res.status(401)
        throw new Error('User not registered')
    }

})

// @desc logout user & clear token
// @route POST /users/login
// @access Private
const logoutUser=asyncHandler(async(req,res)=>{
    res.cookie('jwt','',{//setting token to empty string 
        httpOnly:true,
        expiresIn:new Date(0)
    })
   res.status(200).json('logged out successfully')
})

// @desc Get user profile
// @route GET /users/profile
// @access Private
const getUserProfile=asyncHandler(async(req,res)=>[
    res.send('get user profile')
])

// @desc update user profile
// @route PUT /users/profile
// @access Private
const updateUserProfile=asyncHandler(async(req,res)=>[
    res.send('updateUserProfile')
])

// @desc Get Users
// @route GET /users
// @access Private/Admin
const getUsers=asyncHandler(async(req,res)=>[
    res.send('get users by admin')
])

// @desc get User by Id
// @route get /users/:id
// @access Private/Admin
const getUserById=asyncHandler(async(req,res)=>[
    res.send('get user by id')
])

// @desc Delete user
// @route Delete /users/:id
// @access Private/Admin
const deleteUser=asyncHandler(async(req,res)=>[
    res.send('delete user')
])

// @desc update user by Id
// @route PUT /users/update/:id
// @access Private/Admin
const updateUser=asyncHandler(async(req,res)=>[
    res.send('Update User')
])


export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser 
} 