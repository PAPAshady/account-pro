import clsx from 'clsx';

function Input({ label, className, ...props }) {
  return (
    <div>
      <label className="mb-1 block font-normal">{label}</label>
      <div className="bg-foreground rounded-box-ltr flex grow items-center gap-2 px-3.5">
        <input className={clsx('h-11.25 grow font-normal outline-none', className)} {...props} />
      </div>
    </div>
  );
}

export default Input;
