import z from 'zod';

export const chatsSchema = z.object({
  title: z
    .string({ message: 'موضوع تیکت باید یک رشته متنی باشد.' })
    .min(1, { message: 'موضوع تیکت را وارد کنید.' }),
  description: z
    .string({ message: 'توضیحات تیکت باید یک رشته متنی باشد.' })
    .min(1, { message: 'توضیحات تیکت را وارد کنید.' }),
});
