import clsx from 'clsx';
import { FaUser, FaUserCog } from 'react-icons/fa';

export default function TicketMessage({ text, createdAt, isUser }) {
  const date = new Date(createdAt);
  return (
    <div
      className={clsx(
        'bg-foreground flex w-full flex-col gap-3.75 rounded-3xl rounded-tr-lg p-4 sm:w-[80%]',
        !isUser && 'ms-auto'
      )}
    >
      <div
        className={clsx(
          'rounded-lg rounded-bl-3xl px-4 pt-3 pb-5',
          isUser ? 'bg-[#191919]' : 'bg-[#2b2929]'
        )}
      >
        <span className="font-morabba text-primary flex items-center gap-1 sm:text-lg sm:font-semibold">
          {isUser ? <FaUser className="mb-1 text-sm" /> : <FaUserCog />}{' '}
          {isUser ? 'شما' : 'پشتیبان'} :
        </span>
        <p className="pt-2 text-justify text-sm whitespace-break-spaces text-white sm:text-base">
          {text}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">
          {date.toLocaleTimeString('fa')} - {date.toLocaleDateString('fa')}
        </span>
        <span className="bg-primary size-2 rounded-full"></span>
      </div>
    </div>
  );
}
