import z from 'zod';
import { CART_ITEM_AMOUNT_LIMIT, CART_ACTION_TYPES } from '@/constants';

export const cartItemQuantitySchema = z
  .number({ message: 'Quantity must be a number.' })
  .min(CART_ITEM_AMOUNT_LIMIT.MIN, {
    message: `Quantity must be at least ${CART_ITEM_AMOUNT_LIMIT.MIN}`,
  })
  .max(CART_ITEM_AMOUNT_LIMIT.MAX, {
    message: `Quantity must be at most ${CART_ITEM_AMOUNT_LIMIT.MAX}`,
  });

export const cartItemsSchema = z.object({
  accountType: z.enum(['current', 'new'], {
    message: 'نوع حساب کاربری را انخاب کنید.',
  }),
  region: z.enum(['turkey', 'usa', 'ukraine'], {
    message: 'ریجن اکانت خود را انتخاب کنید',
  }),
  plan: z.refine((val) => typeof val === 'string' && /^[0-9A-Fa-f]{24}$/i.test(val), {
    message: 'پلن مد نظر خود را انتخاب کنید.',
  }),
});

export const cartItemAmountSchema = z.object({
  quantity: cartItemQuantitySchema,
  actionType: z.union(
    [z.literal(CART_ACTION_TYPES.INCREMENT), z.literal(CART_ACTION_TYPES.DECREMENT)],
    {
      message: `actionType must be one of the followings : ['${CART_ACTION_TYPES.INCREMENT}', '${CART_ACTION_TYPES.DECREMENT}']`,
    }
  ),
});
