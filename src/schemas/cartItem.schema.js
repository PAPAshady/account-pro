import z from 'zod';
import { Types } from 'mongoose';
import { CART_ITEM_AMOUNT_LIMIT, CART_ACTION_TYPES } from '@/constants';

const cartItemQuantitySchema = z
  .number({ message: 'Quantity must be a number.' })
  .min(CART_ITEM_AMOUNT_LIMIT.MIN, {
    message: `Quantity must be at least ${CART_ITEM_AMOUNT_LIMIT.MIN}`,
  })
  .max(CART_ITEM_AMOUNT_LIMIT.MAX, {
    message: `Quantity must be at most ${CART_ITEM_AMOUNT_LIMIT.MAX}`,
  });

export const cartItemsSchema = z.object({
  quantity: cartItemQuantitySchema,
  id: z
    .string({ message: 'ProductId must be a string' })
    .refine((val) => Types.ObjectId.isValid(val), { message: 'Invalid productId.' }),
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
