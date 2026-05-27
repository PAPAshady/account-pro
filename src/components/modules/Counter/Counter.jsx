import { useState } from 'react';

import { FaRegTrashAlt, FaCircleNotch } from 'react-icons/fa';

export default function Counter({
  value = 1,
  setValue,
  onIncrement,
  onDecrement,
  disabled,
  isRemovable,
  onRemove,
}) {
  const [isIncrementPending, setIsIncrementPending] = useState(false);
  const [isDecrementPending, setIsDecrementPending] = useState(false);

  const increment = async () => {
    if (value === 99) return;
    setIsIncrementPending(true);
    await onIncrement?.();
    setIsIncrementPending(false);
    setValue((prev) => prev + 1);
  };

  const decrement = async () => {
    if (value === 1) return;
    setIsDecrementPending(true);
    await onDecrement?.();
    setIsDecrementPending(false);
    setValue((prev) => prev - 1);
  };

  return (
    <div className="text-blackColor flex items-center gap-2">
      <button
        type="button"
        disabled={value === 99 || disabled}
        onClick={increment}
        className="bg-primary disabled:bg-primary/70 rounded-box-rtl flex h-9 w-6.5 cursor-pointer items-center justify-center text-xl font-semibold disabled:cursor-not-allowed"
      >
        {isIncrementPending ? <FaCircleNotch className="animate-spin text-base" /> : '+'}
      </button>
      <input
        type="text"
        className="bg-foreground w-11 rounded-lg px-3 py-2 text-center font-bold text-white outline-none"
        value={value}
        max={10}
        min={1}
        onChange={() => setValue(0)}
        readOnly
      />
      <button
        type="button"
        disabled={isRemovable ? disabled : value === 1 || disabled}
        onClick={isRemovable && value === 1 ? onRemove : decrement}
        className="bg-primary disabled:bg-primary/70 rounded-box-ltr flex h-9 w-6.5 cursor-pointer items-center justify-center text-xl font-semibold disabled:cursor-not-allowed"
      >
        {isDecrementPending ? (
          <FaCircleNotch className="animate-spin text-base" />
        ) : isRemovable && value === 1 ? (
          <FaRegTrashAlt className="text-[13px]" />
        ) : (
          '-'
        )}
      </button>
    </div>
  );
}
