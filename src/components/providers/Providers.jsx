'use client';
import { AppProgressBar } from 'next-app-progress-bar';

import QueryClientProvider from './QueryClientProvider';
import ToastProvider from './ToastProvider';

export default function Providers({ children }) {
  return (
    <>
      <AppProgressBar showSpinner={false} color="#0efdc2" crawlSpeed={250} height={2} />
      <QueryClientProvider>
        <ToastProvider>{children}</ToastProvider>
      </QueryClientProvider>
    </>
  );
}
