export default function Counter({ value = 1, setValue, onIncrement, onDecrement, disabled }) {
  const increment = async () => {
    if (value === 99) return;
    await onIncrement?.();
    setValue((prev) => prev + 1);
  };

  const decrement = async () => {
    if (value === 1) return;
    await onDecrement?.();
    setValue((prev) => prev - 1);
  };

  return (
    <div className="text-blackColor flex items-center gap-2">
      <button
        disabled={value === 99 || disabled}
        onClick={increment}
        className="bg-primary disabled:bg-primary/70 rounded-box-rtl flex cursor-pointer items-center justify-center px-2 py-1 text-xl font-semibold disabled:cursor-not-allowed"
      >
        +
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
        disabled={value === 1 || disabled}
        onClick={decrement}
        className="bg-primary disabled:bg-primary/70 rounded-box-ltr flex cursor-pointer items-center justify-center px-2 py-1 text-xl font-semibold disabled:cursor-not-allowed"
      >
        -
      </button>
    </div>
  );
}
