import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import TicketMessage from '@modules/TicketMessage/TicketMessage';
import SendMessageForm from '@templates/Dashboard/Support/SendMessageForm';
import { USER_ROLES } from '@/constants';
import { getMessages } from '@/lib/messages';

export default async function Page({ params }) {
  const { chatId } = await params;
  const { data: messages } = await getMessages(chatId);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <PrimaryButton isLink href="/dashboard/support" className="ms-auto" dir="rtl">
          بازگشت به صفحه قبل
        </PrimaryButton>
      </div>
      <div className="space-y-6 pt-10">
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <TicketMessage
              key={message._id}
              text={message.text}
              createdAt={message.createdAt}
              isUser={message.user.role === USER_ROLES.USER}
            />
          ))}
        </div>
        <SendMessageForm />
      </div>
    </div>
  );
}
