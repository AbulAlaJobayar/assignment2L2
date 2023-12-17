import express from "express"
import { userController } from "./user.controller";



const router= express.Router()
router.post('/users',userController.createUserIntoDB);
router.get('/users',userController.getAllUsersFromDb)
// router.put('/courses/:courseId',validateRequest(courseValidationSchema.updateCourseValidationSchema),courseController.updateCourseIntoDB);
// router.get('/courses/:courseId/reviews',courseController.getCourseByReviewFromDB)
// router.get('/course/best',courseController.getBestCourseByReviewFromDB)
export const userRoute=router