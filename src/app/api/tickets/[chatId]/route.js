import { Types } from 'mongoose';

import { connectToDB } from '@/utils/db';
import messagesModel from '@/models/Message';
import chatsModel from '@/models/Chat';
import { validateUser } from '@/utils/auth';

export async function GET(_, { params }) {
  try {
    await connectToDB();
    const userRes = await validateUser();

    if (userRes.status !== 200)
      return Response.json({ message: 'ابتدا وارد حساب کاربری خود شوید.' }, { status: 401 });

    const { chatId } = await params;

    const isChatIdValid = Types.ObjectId.isValid(chatId);
    if (!isChatIdValid) return Response.json({ message: 'شناسه نامعتبر' }, { status: 400 });

    const { user } = await userRes.json();
    const chat = await chatsModel.findOne({ user: user._id, _id: chatId }, '_id');

    if (!chat) return Response.json({ message: 'تیکت مورد نظر شما یافت نشد.' }, { status: 404 });

    const messages = await messagesModel
      .find({ user: user._id, chat: chat._id })
      .populate({ path: 'user', select: 'role' })
      .sort({ createdAt: 1 });

    return Response.json(messages);
  } catch (error) {
    console.log('Error fetching messages for this chat => ', error);
    return Response.json({ message: 'خطا در دریافت اطلاعات تیکت.' }, { status: 500 });
  }
}
