import clsx from 'clsx';

export default function PrimaryButton({ children, className, dir = 'rtl', ...props }) {
  return (
    <button
      className={clsx(
        'bg-foreground hover:bg-primary hover:bg-hatching flex cursor-pointer items-center justify-center gap-3.5 px-3.75 pt-1.5 pb-2.5 backdrop-blur-xl transition-all duration-300 hover:text-[#2F2F2F]',
        dir === 'rtl' ? 'rounded-box-rtl' : 'rounded-box-ltr',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
