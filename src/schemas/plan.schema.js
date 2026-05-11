import z from 'zod';
import { Types } from 'mongoose';

export const planSchema = z.object({
  productId: z.refine((val) => Types.ObjectId.isValid(val), { message: 'Invalid product id' }),
  title: z
    .string({ message: 'Title must be a string.' })
    .trim()
    .min(3, { message: 'Title must be atleast 3 characters.' }),
  latinTitle: z
    .string({ message: 'latinTitle must be a string.' })
    .trim()
    .min(3, { message: 'latinTitle must be atleast 3 characters.' }),
  price: z
    .number({ message: 'Price must be a number.' })
    .min(0, { message: 'Price cannot be a negative value.' }),
  duration: z
    .number({ message: 'Duration must be a number' })
    .min(30, { message: 'duration cannot be less than 30 days' }),
  specifications: z
    .array(
      z.object({
        title: z
          .string({ message: 'Specification title must be a string.' })
          .trim()
          .min(5, { message: 'Specification title must be include atleast 5 characters.' }),
        description: z
          .string({ message: 'Specification description must be a string.' })
          .trim()
          .min(10, { message: 'Specification description must be include atleast 10 characters.' }),
      }),
      { message: 'Specifications must be an array of objects.' }
    )
    .min(1, { message: 'Atleast one specification is required.' }),
});
