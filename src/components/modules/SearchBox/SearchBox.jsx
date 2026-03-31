import { FaSearch } from 'react-icons/fa';
import clsx from 'clsx';

export default function SearchBox({ className, ...props }) {
  return (
    <div
      className={clsx(
        'bg-foreground rounded-box-rtl flex grow items-center gap-2 px-3.5',
        className
      )}
    >
      <input
        type="text"
        placeholder="جستوجو کنید..."
        className="h-11.25 grow outline-none"
        {...props}
      />
      <FaSearch className="text-paragraph min-h-4 min-w-4 shrink-0" />
    </div>
  );
}
