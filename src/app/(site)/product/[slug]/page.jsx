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
    <div className="container space-y-16 lg:space-y-24">
      <ProductDetails plans={simplifiedPlans} {...product} />
      <Navigation />
      <Introduction {...product} />
      <Plans plans={plans} {...product} />
      <ActivationMethods />
      <ImportantPoints />
      <Faq />
      <Comments productId={product._id} />
    </div>
  );
}
