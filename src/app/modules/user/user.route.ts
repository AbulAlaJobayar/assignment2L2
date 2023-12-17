import express from "express"
import { userController } from "./user.controller";



const router= express.Router()
router.post('/users',userController.createUserIntoDB);
router.get('/users',userController.getAllUsersFromDb)
router.get('/users/:userId',userController.gatSingleUserFromDB)
router.put('/users/:userId',userController.updateUserIntoDB);
router.put('/users/:userId/orders',userController.createOrderIntoDB);
router.delete('/users/:userId',userController.deleteUserFromDB);
router.get('/users/:userId/orders',userController.getAllOrderFromDB);
router.get('/users/:userId/orders/total-price',userController.totalPriceFromOrder);


export const userRoute=router