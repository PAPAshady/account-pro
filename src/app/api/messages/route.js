import { connectToDB } from '@/utils/db';
import { validateUser } from '@/utils/auth';
import { messageSchema } from '@/schemas/messages.schema';
import chatsModel from '@/models/Chat';
import messagesModel from '@/models/Message';

export async function POST(req) {
  try {
    await connectToDB();
    const userRes = await validateUser();

    if (userRes.status !== 200)
      return Response.json({ message: 'لطفا ابتدا وارد حساب کاربری خود شوید.' }, { status: 401 });

    const reqBody = await req.json();
    const { user } = await userRes.json();

    const message = {
      ...reqBody,
      user: user._id,
    };

    const validated = messageSchema.safeParse(message);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return Response.json({ message: 'خطا در ارسال پیام', errors }, { status: 400 });
    }

    const chat = await chatsModel.findOne(
      {
        _id: message.chat,
        $or: [{ user: user._id }, { replier: { $exists: true, $eq: user._id } }],
      },
      '_id'
    );

    if (!chat) return Response.json({ message: 'چت مورد نظر یافت نشد.' }, { status: 404 });

    const createdMessage = await messagesModel.create({
      user: user._id,
      chat: chat._id,
      text: message.text,
    });

    return Response.json(createdMessage, { status: 201 });
  } catch (err) {
    console.log('Error sending message => ', err);
    return Response.json({ message: 'خطا در ارسال پیام' }, { status: 500 });
  }
}
