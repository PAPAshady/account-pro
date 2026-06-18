'use client';
import Image from 'next/image';
import { useState } from 'react';

import { FaShippingFast } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import ApplePlanCard from '@modules/ApplePlanCard/ApplePlanCard';
import Counter from '@modules/Counter/Counter';
import { addToCartMutationOptions } from '@/queries/cart';

export default function OrderForm({ plans }) {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [quantity, setQuantity] = useState(1);
  const { mutate, isPending } = useMutation(addToCartMutationOptions());

  const onPlanChange = (plan) => {
    setSelectedPlan(plan);
    setQuantity(1);
  };

  return (
    <div className="relative z-1 gap-3 space-y-4 md:w-[70%] md:space-y-0 lg:flex lg:w-full">
      <div className="relative grow">
        {/* rectangle image */}
        <div className="absolute top-1/2 left-[-11%] -z-1 hidden -translate-y-1/2 lg:block">
          <Image
            alt=""
            src="/images/index/apple-id-rectangle.png"
            width={100}
            height={308}
            className="h-77 w-25"
          />
        </div>
        <div className="grid h-full grow grid-cols-1 gap-3 md:mb-4 lg:m-0 lg:grid-cols-2">
          {plans.map((plan) => (
            <ApplePlanCard
              key={plan._id}
              title={plan.title}
              description={plan.specifications[0].description}
              checked={plan._id === selectedPlan?._id}
              onChange={() => onPlanChange(plan)}
            />
          ))}
        </div>
      </div>
      <div className="bg-box rounded-box-ltr z-1 grow space-y-4 p-2.5 lg:w-87.5">
        <div className="flex gap-4">
          <FaShippingFast className="ms-2 mt-2" />
          <div>
            <p className="text-xl">تایید و ثبت سفارش</p>
            <p className="text-primary text-sm">Accept and Ordering</p>
          </div>
        </div>
        <div className="mx-auto flex max-w-90 justify-between lg:hidden xl:flex">
          <span className="text-sm">تعداد</span>
          <span className="text-sm">مبلغ قابل پرداخت</span>
        </div>
        <div className="mx-auto flex max-w-90 items-center justify-between gap-2 pb-4 lg:flex-wrap lg:justify-center xl:justify-between">
          <div>
            <Counter value={quantity} setValue={setQuantity} />
          </div>
          <div>
            <div>
              <span suppressHydrationWarning className="w-full min-[360px]:text-xl sm:text-2xl">
                {(selectedPlan?.price * quantity).toLocaleString()}
              </span>
              <span className="text-primary ms-1 min-[360px]:ms-2 sm:text-lg">تومان</span>
            </div>
          </div>
        </div>
        <PrimaryButton
          onClick={() => mutate({ plan: selectedPlan?._id, accountType: 'new', quantity })}
          disabled={isPending}
          dir="ltr"
          isHighLight
          className="bg-hatching! w-full"
        >
          {isPending ? 'لطفا صبر کنید...' : 'افزودن به سبد خرید'}
        </PrimaryButton>
      </div>
    </div>
  );
}
