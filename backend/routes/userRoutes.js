import express from 'express'
const router= express.Router()
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


router.route('/').post(registerUser).get(getUsers)
router.route('/logout').post(logoutUser)
router.route('/login').get(authUser)
router.route('/profile').get(getUserProfile).put(updateUserProfile)
router.route('/:id').delete(deleteUser).get(getUserById).put(updateUser)

export default router