import clsx from 'clsx';

function Input({ label, className, type = 'text', message, ...props }) {
  const isInvalid = props['aria-invalid'];
  return (
    <div>
      <label htmlFor={label} className="mb-1 block font-normal">
        {label}
      </label>
      <div
        className={clsx(
          'bg-foreground border-foreground rounded-box-ltr flex grow items-center gap-2 border px-3.5 transition-colors duration-300 invalid:scale-200',
          isInvalid ? 'border-red-400' : 'border-foreground'
        )}
      >
        <input
          className={clsx('h-10 grow font-normal outline-none', className)}
          name={label}
          type={type}
          {...props}
        />
      </div>
      {isInvalid && <span className="mt-2 block text-sm text-red-400 sm:ps-2">{message}</span>}
    </div>
  );
}

export default Input;
