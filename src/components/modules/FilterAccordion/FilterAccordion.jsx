'use client';
import { useState } from 'react';

import clsx from 'clsx';

export default function FilterAccordion({ title, subtitle, icon, children }) {
  const [isActive, setIsActive] = useState(false);
  const [elemHeight, setElemHeight] = useState(0);

  return (
    <div>
      <div
        onClick={() => setIsActive((prev) => !prev)}
        className={clsx(
          'bg-box group hover:bg-primary rounded-box-ltr flex cursor-pointer items-center gap-4 px-3.75 py-3 transition-colors duration-300',
          isActive && 'bg-primary text-[#191919]'
        )}
      >
        <div className="transition-colors duration-300 group-hover:text-[#191919]">{icon}</div>
        <div className="text-sm">
          <p className="transition-colors duration-300 group-hover:text-[#191919]">{title}</p>
          <p
            className={clsx(
              'transition-colors duration-300 group-hover:text-[#191919]',
              isActive ? 'text-[#191919]' : 'text-primary'
            )}
          >
            {subtitle}
          </p>
        </div>
      </div>
      <div
        className={clsx(
          'bg-foreground mt-2.5 overflow-hidden rounded-2xl rounded-tr-lg px-3.5 transition-all duration-300',
          isActive && `mb-2.5 py-3.5`
        )}
      >
        <div
          ref={(el) => setElemHeight(el?.scrollHeight)}
          className="transition-all duration-300"
          style={{ height: isActive ? elemHeight : 0 }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
