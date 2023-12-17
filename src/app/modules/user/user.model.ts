import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt';
import { TAddress, TFullName, TOrders, TUser } from "./user.interface";
import config from "../../config";
const fullNameSchema = new Schema<TFullName>({

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    }
}, { _id: false })
const addressSchema = new Schema<TAddress>({
    street: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    }
}, { _id: false })
const ordersSchema = new Schema<TOrders>({
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
}, { _id: false })
const userSchema = new Schema<TUser>({
    userId: {
        type: Number,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: [true, 'please input instructor name']
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: fullNameSchema,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    hobbies: {
        type: [String],
        required: true
    },
    address: {
        type: addressSchema,
        required: true,
    },
    orders: {
        type: ordersSchema,
        required: false
    }
}, {
    versionKey: false,
})
userSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this;
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_round),
    );
    next();
  });

export const User = model<TUser>('User', userSchema)