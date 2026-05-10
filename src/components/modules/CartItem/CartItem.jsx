'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { FaRegClock, FaPhotoVideo, FaChartLine } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';

import Counter from '@modules/Counter/Counter';
import { updateCartAmountMutationOptions, removeFromCartMutationOptions } from '@/queries/cart';
import { CART_ACTION_TYPES } from '@/constants';

export default function CartItem({ id, title, price, quantity: itemQuanity, image, slug }) {
  const [quantity, setQuantity] = useState(itemQuanity);
  const { mutateAsync: updateCartAmountHandler, isPending: updateIsPending } = useMutation(
    updateCartAmountMutationOptions()
  );
  const { mutate: removeFromCartHandler, isPending: removeIsPending } = useMutation(
    removeFromCartMutationOptions()
  );

  const isPending = updateIsPending || removeIsPending;

  const incrementCartAmount = async () => {
    await updateCartAmountHandler({
      productId: id,
      quantity,
      actionType: CART_ACTION_TYPES.INCREMENT,
    });
  };

  const decrementCartAmount = async () => {
    await updateCartAmountHandler({
      productId: id,
      quantity,
      actionType: CART_ACTION_TYPES.DECREMENT,
    });
  };

  return (
    <div className="border-foreground flex items-center gap-2 border-t p-4 min-[380px]:gap-6">
      <div className="flex shrink-0 flex-col items-center gap-6 min-[1200px]:w-62.5! md:w-1/2 md:flex-row md:items-center xl:w-75!">
        <Link href={`/product/${slug}`} className="shrink-0">
          <Image
            alt={title}
            width={300}
            height={300}
            src={image}
            className="size-20 object-cover"
          />
        </Link>

        <div className="mx-auto md:hidden">
          <Counter
            value={quantity}
            setValue={setQuantity}
            onIncrement={incrementCartAmount}
            onDecrement={decrementCartAmount}
            onRemove={() => removeFromCartHandler(id)}
            disabled={isPending}
            isRemovable
          />
        </div>

        <Link href={`/product/${slug}`} className="hidden md:block">
          <h3 className="sm:text-lg">{title}</h3>
        </Link>
      </div>
      <div className="flex flex-col gap-2 min-[1200px]:gap-6! md:w-full md:flex-row md:items-center md:gap-4 lg:justify-between">
        <Link href={`/product/${slug}`} className="md:order-1 md:hidden">
          <h3 className="sm:text-lg">{title}</h3>
        </Link>

        <div className="hidden justify-end min-[1200px]:w-full! min-[1200px]:justify-center! md:order-3 md:flex md:w-full lg:w-auto">
          <Counter
            value={quantity}
            setValue={setQuantity}
            onIncrement={incrementCartAmount}
            onDecrement={decrementCartAmount}
            onRemove={() => removeFromCartHandler(id)}
            disabled={isPending}
            isRemovable
          />
        </div>

        <div className="my-2.5 flex flex-wrap gap-x-4 gap-y-2 min-[1200px]:flex! min-[1200px]:w-full! md:order-2 md:hidden">
          <div className="text-paragraph flex items-center gap-1 text-[13px]">
            <FaRegClock />
            <p>مدت زمان یک ماهه</p>
          </div>

          <div className="text-paragraph flex items-center gap-1 text-[13px]">
            <FaPhotoVideo />
            <p>ریجن انگلیس</p>
          </div>
          <div className="text-paragraph flex items-center gap-1 text-[13px]">
            <FaChartLine />
            <p>پلن فردی</p>
          </div>
        </div>

        <div className="min-[1200px]:w-full! md:order-4 md:w-full md:text-end">
          <p className="text-paragraph text-sm sm:mb-1">جمع کل</p>
          <p>
            <span className="text-primary me-1 text-lg font-semibold sm:me-2 sm:text-2xl">
              {(quantity * price).toLocaleString()}
            </span>
            تومان
          </p>
        </div>
      </div>
    </div>
  );
}
