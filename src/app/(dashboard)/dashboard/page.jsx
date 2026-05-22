import UserProducts from '@templates/Dashboard/Dashboard/UserProducts';
import TicketsStatus from '@templates/Dashboard/Dashboard/TicketsStatus';
import News from '@templates/Dashboard/Dashboard/News';

export default function page() {
  return (
    <div className="space-y-12 pb-6">
      <UserProducts />
      <TicketsStatus />
      <News />
    </div>
  );
}

export const dynamic = 'force-dynamic';
