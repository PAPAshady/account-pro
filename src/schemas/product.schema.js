import z from 'zod';

export const productSchema = z.object({
  title: z.string().min(3, { message: 'Product title must include atleast 3 characters.' }).trim(),
  latinTitle: z
    .string()
    .min(3, { message: 'Product latin title must include at least 3 characters.' })
    .trim(),
  heading: z.string().min(10, { message: 'Product heading must include at least 10 characters.' }),
  latinHeading: z
    .string()
    .min(10, { message: 'Product latin heading must include at least 10 characters.' }),
  shortDescription: z
    .string()
    .min(10, { message: 'Product description must include at least 10 characters.' }),
  longDescription: z
    .string()
    .min(10, { message: 'Product long description must include at least 10 characters.' }),
  price: z
    .number({ message: 'Price should be a number.' })
    .min(0, { message: 'Price cannot be lower than 0.' }),
  slug: z.string().min(1, { message: 'slug is required.' }),
  images: z.array(
    z.object({
      url: z.string({ message: 'Invalid url.' }).min(1, { message: 'Image url is required.' }),
      alt: z.string().optional(),
      name: z.string().min(1, { message: 'Image name is required.' }),
    })
  ),
  region: z.string().min(1, { message: 'region is required.' }),
});
