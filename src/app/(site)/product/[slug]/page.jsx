import ProductDetails from '@templates/product/ProductDetails/ProductDetails';
import Navigation from '@templates/product/Navigation/Navigation';
import Introduction from '@templates/product/Introduction/Introduction';
import Plans from '@templates/product/Plans/Plans';
import ActivationMethods from '@templates/product/ActivationMethods/ActivationMethods';
import ImportantPoints from '@templates/product/ImportantPoints/ImportantPoints';
import Faq from '@templates/product/Faq/Faq';
import Comments from '@templates/product/Comments/Comments';
import { getProduct } from '@/lib/products';
import { getPlans } from '@/lib/plans';
import { BASE_URL } from '@/constants';

export default async function Product({ params }) {
  const { slug } = await params;
  const { data: product } = await getProduct(slug);
  const { data: plans } = await getPlans(product._id);
  // plans data with only necessary fields to pass to client components.
  const simplifiedPlans = plans.map(({ _id, title, price, duration }) => ({
    _id,
    title,
    price,
    duration,
  }));
  return (
    <div className="container space-y-20 sm:space-y-30">
      <ProductDetails plans={simplifiedPlans} {...product} />
      <div className="my-20">
        <Navigation />
      </div>
      <Introduction {...product} />
      <Plans plans={plans} {...product} />
      <ActivationMethods />
      <ImportantPoints />
      <Faq />
      <Comments productId={product._id} />
    </div>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data: product } = await getProduct(slug);

  return {
    title: `اکانت پرو | ${product.title}`,
    description: product.shortDescription,
    alternates: {
      canonical: `${BASE_URL}/product/${product.slug}`,
    },
    openGraph: {
      title: product.title,
      description: product.shortDescription,
      url: `${BASE_URL}/product/${product.slug}`,
      siteName: 'اکانت پرو',
      type: 'website',
      images: [
        {
          url: `${BASE_URL}${product.images[0].url}`,
          width: 1024,
          height: 640,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description: product.shortDescription,
      images: [`${BASE_URL}${product.images[0].url}`],
    },
  };
}
