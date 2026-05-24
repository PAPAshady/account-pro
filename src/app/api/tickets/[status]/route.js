import { connectToDB } from '@/utils/db';
import ticketsModel from '@/models/Ticket';
import { validateUser } from '@/utils/auth';
import { TICKET_STATUS } from '@/constants';

export async function GET(_, { params }) {
  try {
    await connectToDB();
    const userRes = await validateUser();

    if (userRes.status !== 200)
      return Response.json({ message: 'لطفا ابتدا وارد حساب کاربری خود شوید.' }, { status: 401 });

    const { status } = await params;

    const validStatus = [...Object.values(TICKET_STATUS), 'all'];
    console.log(validStatus);
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

    const tickets = await ticketsModel.find(filters, '-__v').lean();

    return Response.json(tickets);
  } catch (err) {
    console.log('Error fetching ticket => ', err);
    return Response.json({ message: 'خطا در دریافت تیکت ها' }, { status: 500 });
  }
}
