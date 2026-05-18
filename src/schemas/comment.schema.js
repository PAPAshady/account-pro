import z from 'zod';

export const commentsSchema = z.object({
  body: z
    .string({ message: 'بدنه کامنت باید یک رشته متنی باشد.' })
    .min(1, { message: 'لطفا دیدگاه خود را وارد کنید.' }),
  rating: z.number({ message: 'امتیاز باید عدد باشد.' }).optional(),
});
