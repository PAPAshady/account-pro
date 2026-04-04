import Link from 'next/link';

import clsx from 'clsx';

export default function PrimaryButton({
  children,
  className,
  dir = 'rtl',
  isLink = false,
  ...props
}) {
  const styles = clsx(
    'bg-foreground hover:bg-primary hover:bg-hatching flex cursor-pointer items-center justify-center gap-3.5 px-3.75 pt-1.5 pb-2.5 backdrop-blur-xl transition-all duration-300 hover:text-[#2F2F2F]',
    dir === 'rtl' ? 'rounded-box-rtl' : 'rounded-box-ltr',
    className
  );

  return isLink ? (
    <Link className={styles} {...props}>
      {children}
    </Link>
  ) : (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
