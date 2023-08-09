import asyncHandler from '../middlewares/asyncHandler.js'
import User from '../models/userModel.js'

// @desc Auth user & get token
// @route GET /users/login
// @access Public
const authUser=asyncHandler(async(req,res)=>[
    res.send('auth user')
])

// @desc Register User
// @route POST /users
// @access Public
const registerUser=asyncHandler(async(req,res)=>[
    res.send('register user')
])

// @desc logout user & clear token
// @route POST /users/login
// @access Private
const logoutUser=asyncHandler(async(req,res)=>[
    res.send('logout')
])

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