import Image from 'next/image';
import { useState } from 'react';

import { FaRegTrashAlt } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';

import Counter from '@modules/Counter/Counter';
import { removeFromCartMutationOptions, updateCartAmountMutationOptions } from '@/queries/cart';
import { CART_ACTION_TYPES } from '@/constants';

export default function CartDropDownItem({ id, title, price, image, quantity }) {
  const [productQuantity, setProductQuantity] = useState(quantity);
  const { mutate: removeFromCartHandler } = useMutation(removeFromCartMutationOptions());
  const { mutateAsync: updateCartAmountHandler, isPending } = useMutation(
    updateCartAmountMutationOptions()
  );

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
    <div className="relative flex items-center gap-3 rounded-2xl rounded-tl-sm bg-[#191919CC] p-3.75">
      <button
        onClick={() => removeFromCartHandler(id)}
        className="bg-primary absolute top-1/2 -right-4 grid size-5.5 -translate-y-1/2 cursor-pointer place-content-center rounded-lg text-[#191919] hover:bg-[#07dfa9]"
      >
        <FaRegTrashAlt className="text-xs" />
      </button>
      <div className="flex grow items-center gap-4">
        <div className="h-auto w-8.75 max-w-8.75 shrink-0 overflow-hidden rounded-lg">
          <Image
            alt="spotify"
            width={300}
            height={300}
            src={image}
            className="size-full object-cover"
          />
        </div>
        <div className="grow space-y-0.5">
          <p>{title}</p>
          <p className="text-primary space-x-1">
            <span className="text-lg text-white">{price.toLocaleString()}</span>
            <span className="text-sm">تومان</span>
          </p>
        </div>
      </div>
      <Counter
        value={productQuantity}
        setValue={setProductQuantity}
        onIncrement={incrementCartAmount}
        onDecrement={decrementCartAmount}
        disabled={isPending}
      />
    </div>
  );
}
