import { connectToDB } from '@/utils/db';
import { validateUser } from '@/utils/auth';
import { CHAT_STATUS } from '@/constants';
import chatsModel from '@/models/Chat';

export async function GET() {
  try {
    await connectToDB();
    const userRes = await validateUser();

    if (userRes.status !== 200)
      return Response.json({ message: 'لطفا ابتدا وارد حساب کاربری خود شوید.' }, { status: 401 });

    const { user } = await userRes.json();

    const pending = await chatsModel.countDocuments({
      user: user._id,
      status: CHAT_STATUS.PENDING,
    });

    const checking = await chatsModel.countDocuments({
      user: user._id,
      status: CHAT_STATUS.CHECKING,
    });
    const done = await chatsModel.countDocuments({
      user: user._id,
      status: CHAT_STATUS.DONE,
    });

    return Response.json({ pending, checking, done, all: pending + checking + done });
  } catch (err) {
    console.log('Error fetching chats total counts => ', err);
    return Response.json({ message: 'خطا در دریافت تعداد تیکت ها' }, { status: 500 });
  }
}
