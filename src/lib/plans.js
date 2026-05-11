import { Types } from 'mongoose';

import { connectToDB } from '@/utils/db';
import plansModel from '@/models/Plan';

export const getPlans = async (productId) => {
  try {
    await connectToDB();
    const isValidObjectId = Types.ObjectId.isValid(productId);
    if (!isValidObjectId) return { data: null, status: 400 };
    const plans = await plansModel.find({ productId }, '-__v').lean();
    return { data: JSON.parse(JSON.stringify(plans)), status: 200 };
  } catch (error) {
    console.log('Error getting plans => ', error);
    return { data: null, status: 500 };
  }
};
