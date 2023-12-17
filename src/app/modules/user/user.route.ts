import express from "express"
import { userController } from "./user.controller";



const router= express.Router()
router.post('/users',userController.createUserIntoDB);
router.get('/users',userController.getAllUsersFromDb)
router.get('/users/:userId',userController.gatSingleUserFromDB)
router.put('/users/:userId',userController.updateUserIntoDB);
// router.get('/course/best',courseController.getBestCourseByReviewFromDB)
export const userRoute=router