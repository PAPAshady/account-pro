import Licenses from '@templates/Dashboard/Dashboard/Licenses';
import TicketsStatus from '@templates/Dashboard/Dashboard/TicketsStatus';
import News from '@templates/Dashboard/Dashboard/News';

export default function page() {
  return (
    <div className="space-y-12 pb-6">
      <Licenses />
      <TicketsStatus />
      <News />
    </div>
  );
}
