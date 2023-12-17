import { z } from 'zod';
const fullNameValidation = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const addressValidation = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});
const ordersValidation = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});

const userValidation = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: fullNameValidation,
  age: z.number(),
  email: z.string().email('please provide valid email'),
  isActive: z.boolean().default(true),
  hobbies: z.array(z.string()),
  address: addressValidation,
  orders: ordersValidation.optional(),
});
export default userValidation;
