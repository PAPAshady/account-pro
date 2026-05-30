import { connectToDB } from '@/utils/db';
import productsModel from '@/models/Product';
import blogsModel from '@/models/Blog';

export async function GET(req) {
  try {
    await connectToDB();
    const query = req.nextUrl.searchParams.get('query');
    if (!query?.trim().length) return Response.json(null);

    // prevent regex injection
    const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const searchedProducts = await productsModel.find(
      {
        $or: [
          { title: { $regex: safeQuery, $options: 'i' } },
          { latinTitle: { $regex: safeQuery, $options: 'i' } },
        ],
      },
      '_id title slug'
    );

    const searchedBlogs = await blogsModel.find(
      { title: { $regex: safeQuery, $options: 'i' } },
      '_id title slug'
    );

    const results = { products: searchedProducts, blogs: searchedBlogs };

    return Response.json(results);
  } catch (error) {
    console.log('Error fetching searched items => ', error);
    return Response.json({ message: 'خطا در جستجو.' }, { status: 500 });
  }
}
