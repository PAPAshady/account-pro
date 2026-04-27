import { z } from 'zod';

export const signUpSchema = z
  .object({
    name: z.string().min(2, { message: 'نام باید حداقل شامل دو کرکتر باشد' }),
    email: z.email({ message: 'ایمیل نامعتبر' }),
    phone: z.string().regex(/^09\d{9}$/, 'شماره موبایل باید با 09 شروع شود و 11 رقم باشد'),
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
  email: z.email({ message: 'ایمیل نامعتبر' }),
  password: z
    .string()
    .min(6, { message: 'رمز عبور باید حداقل شامل ۶ کرکتر باشد' })
    .max(20, { message: 'رمز عبور باید حداکثر ۲۰ کرکتر داشته باشد.' }),
});
