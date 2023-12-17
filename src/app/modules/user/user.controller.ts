/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';

import { userService } from './user.services';
import httpStatus from 'http-status';
import { userValidation } from './user.validation';


const createUserIntoDB = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const zodValidation = userValidation.createUserValidation.parse(data);
    const result = await userService.createUserIntoDB(zodValidation);
    res.status(httpStatus.CREATED).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'something went to wrong',

    });
  }
};
const getAllUsersFromDb = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUsersFromDB();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Users not found',
    });
  }
};
const gatSingleUserFromDB = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const result = await userService.getSingleUserFromDB(id);
    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!'
      },
    });
  }
};
const updateUserIntoDB = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    const data = req.body;
    const zodValidation = userValidation.updateUserValidation.parse(data);
    const result = await userService.updateUserIntoDB(id, zodValidation);
    res.status(200).json({
      success: true,
      message: 'User updated successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};
const deleteUserFromDB = async (req: Request, res: Response) => {
  try {
    const id = req.params.userId;
    await userService.deleteUserFromDB(id);
    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

const createOrderIntoDB = async (req: Request, res: Response) => {
  try {
    const {userId} = req.params;
    const data = req.body;
   await userService.createOrderIntoDB(userId, data);
    res.status(201).json({
      success: true,
      message: 'Order created successfully!',
      data: null,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};
const getAllOrderFromDB = async (req: Request, res: Response) => {
  try {
    const {userId} = req.params;
    const result = await userService.getOrderIntoDB(userId);
    res.status(200).json({
      success: true,
      message: 'Order fetched successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};
const totalPriceFromOrder = async (req: Request, res: Response) => {
  try {
    const {userId}= req.params
    const result = await userService. getTotalPriceIntoDB(userId);
    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(404).json({
      success: false,
      message: 'User not found',
      error: {
        code: 404,
        description: 'User not found!',
      },
    });
  }
};

export const userController = {
  createUserIntoDB,
  getAllUsersFromDb,
  gatSingleUserFromDB,
  updateUserIntoDB,
  deleteUserFromDB,
  createOrderIntoDB,
  getAllOrderFromDB,
  totalPriceFromOrder
};
