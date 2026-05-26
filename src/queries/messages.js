import { mutationOptions } from '@tanstack/react-query';
import { toast } from 'sonner';

import { sendMessage } from '@/services/messages';

export const sendMessagesMutationOptions = (chatId) =>
  mutationOptions({
    mutationKey: ['messages', { chatId }],
    mutationFn: sendMessage,
    onError: (error) => {
      const { data, status } = error.response;

      if (status === 400) {
        const errorMessage = Object.entries(data.errors)[0][1];
        toast.error(errorMessage);
        return;
      }

      toast.error(data?.message || 'خطا در ارسال پیام.');
    },
    onSuccess: () => {
      toast.success('پیام شما با موفقیت ارسال شد.');
    },
  });
