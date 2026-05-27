import z from 'zod';

import { normalizeNumber } from '@/utils/general';

const contactUsSchema = z.object({
  firstName: z
    .string({ message: 'نام باید یک رشته متنی باشد.' })
    .min(2, { message: 'نام باید حداقل شامل دو کاراکتر باشد' }),
  lastName: z
    .string({ message: 'نام خانوادگی باید یک رشته متنی باشد.' })
    .min(2, { message: 'نام خانوادگی باید حداقل شامل دو کاراکتر باشد' }),
  phone: z
    .string()
    .transform((val) => normalizeNumber(val))
    .refine((val) => /^09\d{9}$/.test(val), {
      message: 'شماره موبایل باید با 09 شروع شود و 11 رقم باشد',
    }),
  email: z.email({ message: 'ایمیل نامعتبر' }).trim(),
  message: z
    .string({ message: 'پیام باید یک رشته متنی باشد.' })
    .min(5, { message: 'پیام باید حداقل شامل پنج کاراکتر باشد' }),
});

export default contactUsSchema;
