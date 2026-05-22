import { z } from 'zod';

import { normalizeNumber } from '@/utils/general';

export const signUpSchema = z
  .object({
    name: z.string().min(2, { message: 'نام باید حداقل شامل دو کرکتر باشد' }),
    email: z.email({ message: 'ایمیل نامعتبر' }).trim(),
    phone: z
      .string()
      .transform((val) => normalizeNumber(val))
      .refine((val) => /^09\d{9}$/.test(val), {
        message: 'شماره موبایل باید با 09 شروع شود و 11 رقم باشد',
      }),
    password: z
      .string()
      .min(6, { message: 'رمز عبور باید حداقل شامل ۶ کرکتر باشد' })
      .max(20, { message: 'رمز عبور باید حداکثر ۲۰ کرکتر داشته باشد.' }),
    repeatedPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.repeatedPassword) {
      return ctx.addIssue({
        code: 'custom',
        path: ['repeatedPassword'],
        message: 'رمز های عبور همخوانی ندارند.',
      });
    }
    return true;
  });

export const signInSchema = z.object({
  email: z.email({ message: 'ایمیل نامعتبر' }).trim(),
  password: z
    .string()
    .min(6, { message: 'رمز عبور باید حداقل شامل ۶ کرکتر باشد' })
    .max(20, { message: 'رمز عبور باید حداکثر ۲۰ کرکتر داشته باشد.' }),
});

export const userProfileSchema = z
  .object({
    name: z.string().min(2, { message: 'نام باید حداقل شامل دو کرکتر باشد' }),
    phone: z
      .string()
      .transform((val) => normalizeNumber(val))
      .refine((val) => /^09\d{9}$/.test(val), {
        message: 'شماره موبایل باید با 09 شروع شود و 11 رقم باشد',
      }),
    prevPassword: z.string().refine(
      (val) => {
        if (val.length) {
          return val.length >= 6 && val.length <= 20;
        }
        return true;
      },
      { message: 'رمز عبور سابق باید حداقل ۶ و حداکثر ۲۰ کاراکتر داشته باشد.' }
    ),
    newPassword: z.string().refine(
      (val) => {
        if (val.length) {
          return val.length >= 6 && val.length <= 20;
        }
        return true;
      },
      { message: 'رمز عبور جدید باید حداقل ۶ و حداکثر ۲۰ کاراکتر داشته باشد.' }
    ),
    repeatedNewPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.prevPassword && !data.newPassword) {
      return ctx.addIssue({
        code: 'custom',
        path: ['newPassword'],
        message: 'رمز عبور جدید را وارد کنید.',
      });
    }

    if (!data.prevPassword && data.newPassword) {
      return ctx.addIssue({
        code: 'custom',
        path: ['prevPassword'],
        message: 'رمز عبور سابق خود را وارد کنید.',
      });
    }

    if (data.newPassword !== data.repeatedNewPassword) {
      return ctx.addIssue({
        code: 'custom',
        path: ['repeatedNewPassword'],
        message: 'رمز های عبور همخوانی ندارند.',
      });
    }
    return true;
  });
