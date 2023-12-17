/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (payload: TUser)=> {
    const result = await User.create(payload);
    if(result.password){
       const {password,...filteredData}=result.toObject();
       return filteredData
    }
    return result
}
const getAllUsersFromDB = async () => {
    const result = await User.find().select({
      username: 1,
      fullName: 1,
      age: 1,
      email: 1,
      address: 1,
    });
    return result;
}
export const userService = {
    createUserIntoDB,
    getAllUsersFromDB

}