'use client';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

import { useMutation } from '@tanstack/react-query';

import PrimaryButton from '@modules/PrimaryButton/PrimaryButton';
import { sendMessagesMutationOptions } from '@/queries/messages';

export default function SendMessageForm() {
  const router = useRouter();
  const { chatId } = useParams();
  const [text, setText] = useState('');
  const { mutate } = useMutation(sendMessagesMutationOptions(chatId));

  const submitHandler = async (e) => {
    e.preventDefault();
    mutate(
      { text, chat: chatId },
      {
        onSuccess: () => {
          setText('');
          router.refresh();
        },
      }
    );
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="bg-foreground flex flex-col gap-3.75 rounded-3xl rounded-tl-sm p-5 lg:gap-5"
      >
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          minLength={1}
          className="bg-foreground h-40 rounded-2xl rounded-tr-lg px-3.75 py-2.25 outline-none lg:h-30"
          placeholder="پاسخ شما"
        />
        <div>
          <PrimaryButton disabled={text.length < 1} isHighLight className="ms-auto w-30">
            ارسال پیام
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}
