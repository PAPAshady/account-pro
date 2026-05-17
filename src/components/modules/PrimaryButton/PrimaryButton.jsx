import Link from 'next/link';

import clsx from 'clsx';

export default function PrimaryButton({
  children,
  className,
  dir = 'rtl',
  isLink = false,
  isHighLight = false,
  ...props
}) {
  const styles = clsx(
    'flex cursor-pointer disabled:bg-[#089270] disabled:cursor-not-allowed items-center font-semibold justify-center gap-3.5 px-3.75 py-2.5 backdrop-blur-xl text-[15px] transition-all duration-300',
    isHighLight
      ? 'bg-primary hover:bg-[#0bc798] text-[#2f2f2f]'
      : 'bg-foreground hover:bg-primary hover:bg-hatching hover:text-[#2F2F2F]',
    dir === 'rtl' ? 'rounded-box-rtl' : 'rounded-box-ltr',
    className
  );

  return isLink && !props.disabled ? (
    <Link className={styles} {...props}>
      {children}
    </Link>
  ) : (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
