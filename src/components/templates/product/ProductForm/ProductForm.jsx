'use client';
import { useState } from 'react';

import { FaRegHeart, FaShareAlt } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';

import SelectInput from '@modules/SelectInput/SelectInput';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { productInputs } from '@/data';
import { addToCartMutationOptions } from '@/queries/cart';
import Counter from '@modules/Counter/Counter';

export default function ProductForm({ price }) {
  const [quantity, setQuantity] = useState(1);
  const { mutate } = useMutation(addToCartMutationOptions());
  return (
    <>
      <div className="grid grid-cols-2 gap-x-2 gap-y-6 min-[380px]:gap-x-4">
        {productInputs.map(({ id, ...input }) => (
          <SelectInput key={id} {...input} />
        ))}
      </div>
      <div className="bg-foreground flex flex-col gap-5 rounded-3xl rounded-tr-lg p-3.75">
        <div className="flex flex-col items-center gap-2.5 sm:flex-row">
          <div className="w-full space-y-4 rounded-xl rounded-tr-2xl bg-[#191919] p-2.5 text-center text-[#ddd]">
            <span>مبلغ قابل پرداخت :</span>
            <p className="text-[32px]">
              <bdi>
                {price}
                <span className="text-primary ms-2 text-lg">تومان</span>
              </bdi>
            </p>
          </div>
          <div className="flex w-full flex-col items-center gap-2.5 rounded-2xl rounded-tr-lg bg-[#191919] p-2.5 text-[#ddd]">
            <span>تعداد :‌</span>
            <Counter value={quantity} setValue={setQuantity} />
          </div>
          <div className="bg-foreground inline-flex max-w-max flex-col items-center justify-center gap-4 rounded-2xl rounded-tr-lg p-2.5 min-[900px]:hidden lg:inline-flex">
            <button className="bg-box hover:text-primary flex size-8.75 cursor-pointer items-center justify-center rounded-lg rounded-tr-sm text-2xl transition-colors duration-300">
              <FaRegHeart />
            </button>
            <button className="bg-box hover:text-primary flex size-8.75 cursor-pointer items-center justify-center rounded-lg rounded-tr-sm text-2xl transition-colors duration-300">
              <FaShareAlt />
            </button>
          </div>
        </div>
        <div>
          <PrimaryButton
            className="bg-primary w-full font-bold text-[#191919] hover:bg-[#0dbe92]! hover:bg-none"
            dir="ltr"
            onClick={() => mutate({ _id, quantity })}
          >
            افزودن به سبد خرید
          </PrimaryButton>
        </div>
      </div>
    </>
  );
}
