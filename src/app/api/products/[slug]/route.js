import { connectToDB } from '@/utils/db';
import model from '@/models/Product';

export async function GET(_, { params }) {
  try {
    await connectToDB();
    const { slug } = await params;
    const product = await model.findOne({ slug }, '-__v');
    if (!product) return Response.json(null, { status: 404 });
    return Response.json(product);
  } catch (error) {
    console.error('Failed to fetch product => ', error);
    return Response.json({ message: 'خطا در دریافت اطلاعات.' }, { status: 500 });
  }
}
