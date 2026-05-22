import z from 'zod';

import { normalizeNumber } from '@/utils/general';

export const checkoutSchema = z.object({
  firstName: z
    .string({ message: 'نام باید یک رشته باشد' })
    .min(1, { message: 'نام خود را وارد کنید' }),
  lastName: z
    .string({ message: 'نام خانوادگی باید یک رشته باشد' })
    .min(1, { message: 'نام خانوادگی خود را وارد کنید' }),
  email: z.email({ message: 'لطفا یک ایمیل معتبر وارد کنید' }),
  phone: z
    .string()
    .transform((val) => normalizeNumber(val))
    .refine((val) => /^09\d{9}$/.test(val), {
      message: 'شماره موبایل باید با 09 شروع شود و 11 رقم باشد',
    }),
  telegram: z.string({ message: 'آدرس تلگرام باید یک رشته باشد.' }).optional(),
  whatsapp: z.string({ message: 'آدرس واتساپ باید یک رشته باشد.' }).optional(),
  footNote: z.string({ message: 'توضیحات باید رشته باشد' }).optional(),
});
