import clsx from 'clsx';

export default function RoundedContainer({ children, dir = 'rtl', containerClassName, ...props }) {
  return (
    <div
      className={clsx(
        'overflow-hidden rounded-[20px]',
        dir === 'rtl' ? 'rounded-tl-lg' : 'rounded-tr-lg',
        containerClassName
      )}
    >
      <div {...props}>{children}</div>
    </div>
  );
}
