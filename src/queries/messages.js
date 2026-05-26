import { queryOptions } from '@tanstack/react-query';

import { getMessages } from '@/services/messages';

export const getMessagesQueryOptions = (chatId) =>
  queryOptions({
    queryKey: ['messages', { chatId }],
    queryFn: () => getMessages(chatId),
  });
