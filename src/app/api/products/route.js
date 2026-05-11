import { connectToDB } from '@/utils/db';
import { productSchema } from '@/schemas/product.schema';
import { validateUser } from '@/utils/auth';
import model from '@/models/Product';
import categoriesModel from '@/models/Category';
import { saveFileToDisk } from '@/utils/file';

export async function POST(req) {
  try {
    await connectToDB();
    const isUserValidated = (await validateUser({ checkIsAdmin: true })).status === 200;
    if (!isUserValidated) return Response.json({ message: 'Prohibited access.' }, { status: 401 });

    const data = await req.formData();
    const product = {};

    for (let [key, value] of data) {
      if (key === 'price') product.price = +value;
      else product[key] = value;
    }

    const validated = productSchema.safeParse(product);

    if (!validated.success) {
      const errors = validated.error.flatten().fieldErrors;
      return Response.json({ message: 'Invalid user input', errors }, { status: 400 });
    }

    const alreadyExists = await model.findOne({
      $or: [{ title: product.title }, { slug: product.slug }],
    });

    if (alreadyExists) {
      return Response.json(
        { message: 'Product with this title/slug already exists.' },
        { status: 409 }
      );
    }

    const mainImageUrl = await saveFileToDisk(
      product.mainImage,
      `${product.latinTitle}-main`,
      'products'
    );
    const sectionImageUrl = await saveFileToDisk(
      product.sectionImage,
      `${product.latinTitle}-section`,
      'products'
    );

    delete product.mainImage;
    delete product.sectionImage;

    const createdProduct = await model.create({
      ...product,
      images: [
        { name: 'main', url: mainImageUrl },
        { name: 'section', url: sectionImageUrl },
      ],
    });

    return Response.json(createdProduct);
  } catch (error) {
    console.error('Error adding product => ', error);
    return Response.json({ message: 'Failed to add product to database' }, { status: 500 });
  }
}

export async function GET(req) {
  try {
    await connectToDB();
    const params = req.nextUrl.searchParams;
    const categoryParams = params.getAll('cat');
    const searchParam = params.get('search')?.trim();

    // Build filter dynamically
    const filters = {};

    if (categoryParams.length) {
      const categories = await categoriesModel.find({ slug: { $in: categoryParams } }, '_id');
      const categoryIds = categories.map((cat) => cat.id);
      if (categoryIds.length) filters.category = { $in: categoryIds };
    }
    if (searchParam) {
      // prevent regex injection
      const safeSearchParam = searchParam.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      filters.$or = [
        { title: { $regex: safeSearchParam, $options: 'i' } },
        { latinTitle: { $regex: safeSearchParam, $options: 'i' } },
      ];
    }

    const products = await model.find(filters, '-__v').populate('category', '-__v');
    return Response.json(products);
  } catch (err) {
    console.error('Error fetching products => ', err);
    return Response.json({ message: 'Failed to fetch products' }, { status: 500 });
  }
}
