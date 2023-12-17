import express from "express"



const router= express.Router()
router.post('/users');
// router.get('/courses',courseController.getAllCourseFromDB)
// router.put('/courses/:courseId',validateRequest(courseValidationSchema.updateCourseValidationSchema),courseController.updateCourseIntoDB);
// router.get('/courses/:courseId/reviews',courseController.getCourseByReviewFromDB)
// router.get('/course/best',courseController.getBestCourseByReviewFromDB)
export const userRoute=router