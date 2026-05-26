import z from 'zod';
import { Types } from 'mongoose';

export const messageSchema = z.object({
  text: z
    .string({ message: 'متن پیام باید یک رشته متنی باشد.' })
    .trim()
    .min(1, { message: 'متن پیام را وارد کنید.' }),
  user: z
    .string({ message: 'شناسه کاربر باید رشته متنی باشد.' })
    .refine((val) => Types.ObjectId.isValid(val), { message: 'شناسه کاربر نامعتبر' }),
  chat: z
    .string({ message: 'شناسه چت باید رشته متنی باشد.' })
    .refine((val) => Types.ObjectId.isValid(val), { message: 'شناسه چت نامعتبر' }),
});
