import { connectToDB } from '@/utils/db';
import { validateUser } from '@/utils/auth';
import ticketsModel from '@/models/Ticket';

export const getTickets = async () => {
  try {
    await connectToDB();
    const userRes = await validateUser();

    if (userRes.status !== 200) return { data: null, status: 401 };

    const { user } = await userRes.json();

    const tickets = await ticketsModel.find({ user: user._id }, '-__v').lean();

    return { data: JSON.parse(JSON.stringify(tickets)), status: 200 };
  } catch (err) {
    console.log('Error fetching ticket => ', err);
    return { data: null, status: 500 };
  }
};
