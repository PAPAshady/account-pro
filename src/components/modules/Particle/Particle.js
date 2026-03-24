import clsx from 'clsx';

export default function Particle({ className }) {
  return <div className={clsx('bg-primary absolute -z-1 rounded-full', className)}></div>;
}
