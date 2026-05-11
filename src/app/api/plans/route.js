import { connectToDB } from '@/utils/db';

export async function POST(req) {
  try {
    await connectToDB();
    const plan = await req.json();

    return Response.json('OK!');
  } catch (err) {
    console.log('Failed to add new plan => ', err);
    return Response.json({ message: 'Failed to add new plan' }, { status: 500 });
  }
}
