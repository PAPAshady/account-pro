import clsx from 'clsx';

import styles from './Skeleton.module.css';

export default function Skeleton({ className, children, ...props }) {
  return (
    <div className={clsx(styles.skeleton, className)} {...props}>
      {children}
    </div>
  );
}
