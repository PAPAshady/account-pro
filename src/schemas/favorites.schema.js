import z from 'zod';
import { Types } from 'mongoose';

import { FAVORITES_ITEM_TYPES } from '@/constants';

export const favoritesSchema = z.object({
  type: z.enum(Object.values(FAVORITES_ITEM_TYPES), {
    message: `تایپ باید یکی از مقادیر [${Object.values(FAVORITES_ITEM_TYPES)}] باشد.`,
  }),
  itemId: z
    .string({ message: 'آیدی باید رشته متنی باشد.' })
    .refine((val) => Types.ObjectId.isValid(val), { message: 'آیدی نامعتبر' }),
});
