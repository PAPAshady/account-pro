import { connectToDB } from '@/utils/db';
import ticketsModel from '@/models/Ticket';
import { validateUser } from '@/utils/auth';
import { ticketSchema } from '@/schemas/tickets.schema';
import { TICKET_STATUS } from '@/constants';

export async function POST(req) {
  try {
    await connectToDB();
    const userRes = await validateUser();

    if (userRes.status !== 200)
      return Response.json({ message: 'لطفا ابتدا وارد حساب کاربری خود شوید.' }, { status: 401 });

    const ticket = await req.json();
    const validated = ticketSchema.safeParse(ticket);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return Response.json({ message: 'خطا در ایجاد تیکت جدید.', errors }, { status: 400 });
    }

    const { user } = await userRes.json();

    const newTicket = {
      ...ticket,
      user: user._id,
      status: TICKET_STATUS.PENDING,
      chatId: Date.now().toString(36).toUpperCase(),
    };

    const createdTicket = await ticketsModel.create(newTicket);

    return Response.json(createdTicket, { status: 201 });
  } catch (err) {
    console.log('Error creating ticket => ', err);
    return Response.json({ message: 'خطا در ایجاد تیکت' }, { status: 500 });
  }
}
