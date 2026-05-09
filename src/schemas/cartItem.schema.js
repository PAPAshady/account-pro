import z from 'zod';
import { Types } from 'mongoose';

export const cartItemsSchema = z.object({
  quantity: z
    .number({ message: 'Quantity must be a number.' })
    .min(1, { message: 'Quantity must be at least 1' })
    .max(10, { message: 'Quantity must be at most 10' }),
  id: z
    .string({ message: 'ProductId must be a string' })
    .refine((val) => Types.ObjectId.isValid(val), { message: 'Invalid productId.' }),
});
