import z from 'zod';

export const categorySchema = z.object({
  title: z
    .string({ message: 'Title must be a string.' })
    .trim()
    .min(1, { message: 'Title is required.' }),
  latinTitle: z
    .string({ message: 'Latin title must be a string.' })
    .trim()
    .min(1, { message: 'Latin title is required.' }),
  slug: z
    .string({ message: 'Slug must be a string.' })
    .trim()
    .min(1, { message: 'Slug is required.' }),
  iconName: z
    .string({ message: 'Icon name must be a string.' })
    .trim()
    .min(1, { message: 'Icon name is required.' }),
});
