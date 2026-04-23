import model from '@/models/User';
import { connectToDB } from '@/utils/db';

export async function POST() {
  await connectToDB();

  try {
    const newUser = await model.create(
      {
        email: 'zamani.nima18@gmail.com',
        name: 'Nima Zamani',
        password: 'Hesoyam4549',
        phone: '09331844549',
      },
    );

    return Response.json(newUser, { status: 201 });
  } catch (err) {
    console.log('Internal server error => ', err);
  }
}
