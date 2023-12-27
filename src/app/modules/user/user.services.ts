/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from "mongoose";
import { TOrders, TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (payload: TUser) => {
    const result = await User.create(payload);
    if (result.password) {
        const { password,orders,_id, ...filteredData } = result.toObject();
        return filteredData
    }
    return result
}
const getAllUsersFromDB = async () => {
    const result = await User.find().select({
        _id: 0,
        username: 1,
        fullName: 1,
        age: 1,
        email: 1,
        address: 1,
    });
    return result;
}
const getSingleUserFromDB = async (userId: string) => {
  
    const result = await User.findOne({userId}).select({
        _id: 0,
        userId: 1,
        username: 1,
        fullName: 1,
        age: 1,
        email: 1,
        isActive: 1,
        hobbies: 1,
        address: 1,
    });
    return result;
};
const updateUserIntoDB = async (userId: string, userData: Partial<TUser | unknown>) => {
    const result = await User.findOneAndUpdate({userId}, userData, {
        new: true,
        runValidators: true,
    }).select({
        _id: 0,
        userId: 1,
        username: 1,
        fullName: 1,
        age: 1,
        email: 1,
        isActive: 1,
        hobbies: 1,
        address: 1,
    });
    return result;
};
const deleteUserFromDB = async (userId: string) => {
    const result = await User.findOneAndDelete({userId});
    return result;
};

const createOrderIntoDB = async (userId: string, payload: TOrders) => {
    const result = await User.findOneAndUpdate({userId}, {
        $push: { orders: payload }
    }, { new: true, upsert: true })
    return result
}
const getOrderIntoDB = async (userId: string) => {
    const result = await User.findOne({userId}).select({
        _id: 0,
        orders: 1
    })
    return result
}
const getTotalPriceIntoDB = async (userId: string) => {

    const user = await User.findOne({userId})
    if (!user?.orders) {
        throw new Error("order cannot found")
    }
    else if (user?.orders) {
        const result = user.orders?.reduce((sum, order) => sum + order.price * order.quantity, 0)
        return { totalPrice: result }
    }
  

    return user.orders
}

export const userService = {
    createUserIntoDB,
    getAllUsersFromDB,
    getSingleUserFromDB,
    updateUserIntoDB,
    deleteUserFromDB,
    createOrderIntoDB,
    getOrderIntoDB,
    getTotalPriceIntoDB
}