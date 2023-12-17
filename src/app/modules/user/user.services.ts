/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TOrders, TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (payload: TUser) => {
    const result = await User.create(payload);
    if (result.password) {
        const { password, ...filteredData } = result.toObject();
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
const getSingleUserFromDB = async (id: string) => {
    const result = await User.findById(id).select({
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
const updateUserIntoDB = async (id: string, userData: Partial<TUser | unknown>) => {
    const result = await User.findByIdAndUpdate(id, userData, {
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
const deleteUserFromDB = async (id: string) => {
    const result = await User.findByIdAndDelete(id);
    return result;
};

const createOrderIntoDB = async (id: string, payload: TOrders) => {
    const result = await User.findByIdAndUpdate({ _id: id }, {
        $push: { orders: payload }
    }, { new: true, upsert: true })
    console.log(result)
    return result
}
const getOrderIntoDB=(id:string)=>{

}
export const userService = {
    createUserIntoDB,
    getAllUsersFromDB,
    getSingleUserFromDB,
    updateUserIntoDB,
    deleteUserFromDB,
    createOrderIntoDB
}