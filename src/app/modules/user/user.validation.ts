import { z } from 'zod';
const createFullNameValidation = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

const createAddressValidation = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});
/*const createOrdersValidation = z.object({
  productName: z.string(),
  price: z.number(),
  quantity: z.number(),
});*/

const createUserValidation = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string(),
  fullName: createFullNameValidation,
  age: z.number(),
  email: z.string().email('please provide valid email'),
  isActive: z.boolean().default(true),
  hobbies: z.array(z.string()),
  address: createAddressValidation,
  //orders:z.array(createOrdersValidation).optional(),
});



const updateFullNameValidation = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
  });
  
  const updateAddressValidation = z.object({
    street: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
  });
  /*const updateOrdersValidation = z.object({
    productName: z.string().optional(),
    price: z.number().optional(),
    quantity: z.number().optional(),
  });*/
  
  const updateUserValidation = z.object({
    userId: z.number().optional(),
    username: z.string().optional(),
    password: z.string().optional(),
    fullName: updateFullNameValidation.optional(),
    age: z.number().optional(),
    email: z.string().email('please provide valid email').optional(),
    isActive: z.boolean().default(true).optional(),
    hobbies: z.array(z.string()).optional(),
    address: updateAddressValidation.optional(),
    //orders:z.array(updateOrdersValidation).optional(),
  });
export const userValidation = {
    createUserValidation,
    updateUserValidation
} 
