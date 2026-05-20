import { Toaster } from 'sonner';

export default function ToastProvider({ children }) {
  return (
    <>
      <Toaster
        position="top-left"
        richColors
        theme="dark"
        toastOptions={{
          classNames: {
            toast: 'bg-[#252525]!',
            title: 'font-yekanBakh text-base! text-white/90!',
            description: 'text-paragraph!',
            success: 'border-primary!',
            warning: 'border-yellow-400!',
            error: 'border-red-400!',
          },
        }}
      />
      {children}
    </>
  );
}
