import { connectToDB } from '@/utils/db';
import { validateUser } from '@/utils/auth';
import { CHAT_STATUS } from '@/constants';
import chatsModel from '@/models/Chat';

export async function GET(_, { params }) {
  try {
    await connectToDB();
    const userRes = await validateUser();

    if (userRes.status !== 200)
      return Response.json({ message: 'لطفا ابتدا وارد حساب کاربری خود شوید.' }, { status: 401 });

    const { status } = await params;

    const validStatus = [...Object.values(CHAT_STATUS), 'all'];
    const isStatusValid = validStatus.includes(status.toLowerCase());

    if (!isStatusValid) {
      return Response.json(
        {
          message: `Invalid status filter. Valid options are : [${validStatus.join()}]`,
        },
        { status: 400 }
      );
    }

    const { user } = await userRes.json();
    const filters = { user: user._id };

    if (status.toLowerCase() !== 'all') {
      validStatus.some((statusItem) => {
        if (statusItem === status.toLowerCase()) {
          filters.status = statusItem;
          return true;
        }
      });
    }

    const chats = await chatsModel.find(filters, '-__v').sort({ createdAt: 1 }).lean();

    return Response.json(chats);
  } catch (err) {
    console.log('Error fetching chats => ', err);
    return Response.json({ message: 'خطا در دریافت تیکت ها' }, { status: 500 });
  }
}
