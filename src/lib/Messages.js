import { Types } from 'mongoose';

import { connectToDB } from '@/utils/db';
import messagesModel from '@/models/Message';
import chatsModel from '@/models/Chat';
import { validateUser } from '@/utils/auth';

export const getMessages = async (chatId) => {
  try {
    await connectToDB();
    const userRes = await validateUser();

    if (userRes.status !== 200) return { data: null, status: 401 };

    const isChatIdValid = Types.ObjectId.isValid(chatId);
    if (!isChatIdValid) return { data: null, status: 400 };

    const { user } = await userRes.json();
    const chat = await chatsModel.findOne({ user: user._id, _id: chatId }, '_id');

    if (!chat) return { data: null, status: 404 };

    const messages = await messagesModel
      .find({ user: user._id, chat: chat._id })
      .populate({ path: 'user', select: 'role' })
      .sort({ createdAt: 1 })
      .lean();

    return { data: JSON.parse(JSON.stringify(messages)), status: 200 };
  } catch (error) {
    console.log('Error fetching messages for this chat => ', error);
    return { data: null, status: 500 };
  }
};
