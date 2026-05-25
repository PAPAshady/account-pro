import { connectToDB } from '@/utils/db';
import chatsModel from '@/models/Chat';
import messagesModel from '@/models/Message';
import { validateUser } from '@/utils/auth';
import { chatsSchema } from '@/schemas/chats.schema';
import { CHAT_STATUS } from '@/constants';

export async function POST(req) {
  try {
    await connectToDB();
    const userRes = await validateUser();

    if (userRes.status !== 200)
      return Response.json({ message: 'لطفا ابتدا وارد حساب کاربری خود شوید.' }, { status: 401 });

    const chat = await req.json();
    const validated = chatsSchema.safeParse(chat);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return Response.json({ message: 'خطا در ایجاد تیکت جدید.', errors }, { status: 400 });
    }

    const { user } = await userRes.json();

    const newChat = {
      title: chat.title,
      user: user._id,
      replier: null,
      status: CHAT_STATUS.PENDING,
      chatId: Date.now().toString(36).toUpperCase(),
    };

    const createdChat = await chatsModel.create(newChat);

    const newMessage = {
      user: user._id,
      chat: createdChat._id,
      text: chat.description,
    };

    const createdMessage = await messagesModel.create(newMessage);

    return Response.json(createdChat, { status: 201 });
  } catch (err) {
    console.log('Error creating chat => ', err);
    return Response.json({ message: 'خطا در ایجاد تیکت' }, { status: 500 });
  }
}
