'use client';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

import { FaCircleNotch } from 'react-icons/fa';

export default function DynamicIcon({ iconName, ...props }) {
  const [IconComponent, setIconComponent] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadIcon = async () => {
      if (!iconName) {
        setError(true);
        return;
      }

      try {
        // Dynamic import based on stored library
        const iconModule = await import(`react-icons/fa`);

        if (iconModule[iconName]) {
          setIconComponent(() => iconModule[iconName]);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error(`Failed to load icon: fa/${iconName}`, err);
        setError(true);
      }
    };

    loadIcon();
  }, [iconName]);

  if (error) return <span>🔲</span>;
  if (!IconComponent) return <FaCircleNotch className={clsx('animate-spin', props.className)} />;

  return <IconComponent {...props} />;
}
