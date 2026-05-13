'use client';
import { useState } from 'react';

import { FaRegHeart, FaShareAlt, FaUser, FaChartLine } from 'react-icons/fa';
import { useMutation } from '@tanstack/react-query';
import clsx from 'clsx';
import { zodResolver } from '@hookform/resolvers/zod';

import SelectInput from '@modules/SelectInput/SelectInput';
import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { addToCartMutationOptions } from '@/queries/cart';
import Counter from '@modules/Counter/Counter';
import { useForm } from 'react-hook-form';

import { cartItemsSchema } from '@/schemas/cartItem.schema';

export default function ProductForm({ price, plans }) {
  const [quantity, setQuantity] = useState(1);
  const { mutate } = useMutation(addToCartMutationOptions());
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(cartItemsSchema) });

  const submitHandler = (data) => {
    mutate({ ...data, quantity }, { onSuccess: (data) => console.log(data) });
  };

  const selectedPlan = plans.find((plan) => plan._id === watch('plan')) || null;

  return (
    <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
      <div className="grid grid-cols-1 gap-x-2 gap-y-6 min-[380px]:gap-x-4 sm:grid-cols-2">
        <SelectInput
          label="پلن ها"
          icon={<FaChartLine />}
          isInvalid={!!errors.plan}
          errorMessage={errors.plan?.message}
          {...register('plan')}
        >
          {plans.map((plan) => (
            <option key={plan._id} value={plan._id}>
              {plan.title} - ({plan.duration} روزه)
            </option>
          ))}
        </SelectInput>
        <SelectInput
          label="نوع حساب کاربری"
          icon={<FaUser />}
          isInvalid={!!errors.accountType}
          errorMessage={errors.accountType?.message}
          {...register('accountType')}
        >
          <option value="new">حساب کاربری جدید</option>
          <option value="current">حساب کاربری موجود (روی ایمیل شما)</option>
        </SelectInput>
      </div>
      <div className="bg-foreground flex flex-col gap-5 rounded-3xl rounded-tr-lg p-3.75">
        <div className="flex flex-col items-center gap-2.5 sm:flex-row">
          {selectedPlan && (
            <div className="w-full space-y-4 rounded-xl rounded-tr-2xl bg-[#191919] p-2.5 text-center text-[#ddd]">
              <span>مبلغ قابل پرداخت :</span>
              <p className="text-[32px]">
                <bdi>
                  {((selectedPlan?.price || 0) * quantity).toLocaleString()}
                  <span className="text-primary ms-2 text-lg">تومان</span>
                </bdi>
              </p>
            </div>
          )}
          <div className="flex w-full flex-col items-center gap-2.5 rounded-2xl rounded-tr-lg bg-[#191919] p-2.5 text-[#ddd]">
            <span>تعداد :‌</span>
            <Counter value={quantity} setValue={setQuantity} />
          </div>
          <div className="bg-foreground inline-flex max-w-max flex-col items-center justify-center gap-4 rounded-2xl rounded-tr-lg p-2.5 min-[900px]:hidden lg:inline-flex">
            <button
              type="button"
              className="bg-box hover:text-primary flex size-8.75 cursor-pointer items-center justify-center rounded-lg rounded-tr-sm text-2xl transition-colors duration-300"
            >
              <FaRegHeart />
            </button>
            <button
              type="button"
              className="bg-box hover:text-primary flex size-8.75 cursor-pointer items-center justify-center rounded-lg rounded-tr-sm text-2xl transition-colors duration-300"
            >
              <FaShareAlt />
            </button>
          </div>
        </div>
        <div>
          <PrimaryButton
            className="bg-primary w-full font-bold text-[#191919] hover:bg-[#0dbe92]! hover:bg-none"
            dir="ltr"
            type="submit"
          >
            افزودن به سبد خرید
          </PrimaryButton>
        </div>
      </div>
    </form>
  );
}
