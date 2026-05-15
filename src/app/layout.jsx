import { QueryClientProvider } from '@tanstack/react-query';
import { AppProgressBar } from 'next-app-progress-bar';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import InitAuth from '@/services/InitAuth';
import queryClient from '@/queryClient';
import './globals.css';

export const metadata = {
  title: 'اکانت پرو',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR" dir="rtl" className="scroll-smooth antialiased">
      <body>
        <AppProgressBar showSpinner={false} color="#0efdc2" crawlSpeed={250} height={2} />
        <InitAuth />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
