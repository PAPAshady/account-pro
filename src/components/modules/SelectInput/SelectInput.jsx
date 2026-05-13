import clsx from 'clsx';

export default function SelectInput({ label, icon, children, isInvalid, errorMessage, ...props }) {
  return (
    <div className="w-full space-y-2">
      <p className="text-paragraph flex items-center gap-1 text-sm min-[380px]:text-base">
        {icon}
        <span>{label} : </span>
      </p>
      <p
        className={clsx(
          '-mt-1 mb-0.5 h-5 text-sm text-red-400 transition-opacity duration-300',
          isInvalid ? 'opacity-100' : 'opacity-0'
        )}
      >
        {errorMessage}
      </p>
      <div
        className={clsx(
          'bg-box overflow-hidden rounded-2xl rounded-tr-lg border px-2 transition-colors duration-300',
          isInvalid ? 'border-red-400' : 'border-transparent'
        )}
      >
        <select className="bg-box w-full p-4 ps-2 text-sm min-[380px]:text-base" {...props}>
          <option value="">انتخاب کنید</option>
          {children}
        </select>
      </div>
    </div>
  );
}
