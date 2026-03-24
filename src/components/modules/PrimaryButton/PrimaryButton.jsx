import clsx from 'clsx';

import RoundedContainer from '@/ui/RoundedContainer/RoundedContainer';

export default function PrimaryButton({ children, className, dir, props }) {
  return (
    <RoundedContainer dir={dir}>
      <button
        className={clsx(
          'bg-foreground hover:bg-primary flex cursor-pointer items-center justify-center gap-3.5 px-3.75 pt-1.5 pb-2.5 transition-colors duration-300 hover:text-[#2F2F2F]',
          className
        )}
        {...props}
      >
        {children}
      </button>
    </RoundedContainer>
  );
}
