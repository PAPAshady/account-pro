'use client';
import { useState } from 'react';

import clsx from 'clsx';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function FaqAccordion({ title, text }) {
  const [isActive, setIsActive] = useState(false);
  const [elemHeight, setElemHeight] = useState(0);
  return (
    <div className="overflow-hidden rounded-3xl rounded-tl-lg">
      <div>
        <div
          onClick={() => setIsActive((prev) => !prev)}
          className="bg-foreground flex cursor-pointer items-center gap-4 p-5"
        >
          <div className="flex w-full items-center justify-between gap-2 text-sm">
            <p className="grow text-base font-normal">{title}</p>
            <div className="bg-primary flex size-8 min-w-5 items-center justify-center rounded-lg rounded-tr-sm text-[#191919]">
              {isActive ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          'bg-foreground overflow-hidden rounded-b-3xl px-3.5 transition-all duration-300',
          isActive && `mb-2.5 pb-3.5`
        )}
      >
        <div
          ref={(el) => setElemHeight(el?.scrollHeight)}
          className="transition-all duration-300"
          style={{ height: isActive ? elemHeight : 0 }}
        >
          <div className="rounded-3xl rounded-tr-lg bg-[#111] p-5">
            <p className="text-sm font-light text-[#b7b7b7] md:text-base">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
