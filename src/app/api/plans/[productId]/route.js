import { Types } from 'mongoose';

import { connectToDB } from '@/utils/db';
import plansModel from '@/models/Plan';

export async function GET(_, { params }) {
  try {
    await connectToDB();
    const { productId } = await params;
    const isValidObjectId = Types.ObjectId.isValid(productId);
    if (!isValidObjectId) return Response.json({ message: 'Invalid product id' }, { status: 400 });
    const plans = await plansModel.find({ productId }, '-__v');
    return Response.json(plans);
  } catch (error) {
    console.log('Error getting plans => ', error);
    return Response.json({ message: 'Failed to get planes' }, { status: 500 });
  }
}
