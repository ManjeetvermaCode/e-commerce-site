import express from 'express'
const router= express.Router()

import  {protect,Admin}  from '../middlewares/userMiddleware.js'

import { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser 
} from '../controllers/userControllers.js'


router.route('/').post(registerUser).get(protect,Admin,getUsers)
router.route('/logout').post(logoutUser)
router.route('/login').post(authUser)
router.route('/profile').get(protect,getUserProfile).put(updateUserProfile)
router.route('/:id').delete(protect,Admin,deleteUser).get(protect,Admin,getUserById).put(protect,Admin,updateUser)

export default router