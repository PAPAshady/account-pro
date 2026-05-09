import z from 'zod';
import { Types } from 'mongoose';

export const productSchema = z.object({
  title: z.string().trim().min(3, { message: 'Product title must include atleast 3 characters.' }),
  latinTitle: z
    .string()
    .trim()
    .min(3, { message: 'Product latin title must include at least 3 characters.' }),
  heading: z
    .string()
    .trim()
    .min(10, { message: 'Product heading must include at least 10 characters.' }),
  latinHeading: z
    .string()
    .trim()
    .min(10, { message: 'Product latin heading must include at least 10 characters.' }),
  shortDescription: z
    .string()
    .trim()
    .min(10, { message: 'Product description must include at least 10 characters.' }),
  longDescription: z
    .string()
    .trim()
    .min(10, { message: 'Product long description must include at least 10 characters.' }),
  price: z
    .number({ message: 'Price should be a number.' })
    .min(0, { message: 'Price cannot be lower than 0.' }),
  slug: z.string().trim().min(1, { message: 'slug is required.' }),
  region: z.string().trim().min(1, { message: 'region is required.' }),
  mainImage: z.instanceof(File, {
    message: 'main-image must be a file.',
  }),
  sectionImage: z.instanceof(File, {
    message: 'section-image must be a file.',
  }),
  category: z
    .string({ message: 'categoryId Must be a string.' })
    .refine((val) => Types.ObjectId.isValid(val), {
      message: 'Invalid MongoDB ObjectId format',
    }),
});
