export default function Counter({ value = 1, setValue, onIncrement, onDecrement }) {
  const increment = () => {
    if (value === 10) return;
    setValue((prev) => prev + 1);
    onIncrement?.();
  };

  const decrement = () => {
    if (value === 1) return;
    setValue((prev) => prev - 1);
    onDecrement?.();
  };

  return (
    <div className="text-blackColor flex items-center gap-2">
      <button
        disabled={value === 10}
        onClick={increment}
        className="bg-primary disabled:bg-primary/70 rounded-box-rtl flex cursor-pointer items-center justify-center px-2 py-1 text-xl font-semibold disabled:cursor-not-allowed"
      >
        +
      </button>
      <input
        type="text"
        className="bg-foreground w-11 rounded-lg px-3 py-2 text-center font-bold text-white outline-none"
        defaultValue={value}
        max={10}
        min={1}
        readOnly
      />
      <button
        disabled={value === 1}
        onClick={decrement}
        className="bg-primary disabled:bg-primary/70 rounded-box-ltr flex cursor-pointer items-center justify-center px-2 py-1 text-xl font-semibold disabled:cursor-not-allowed"
      >
        -
      </button>
    </div>
  );
}
