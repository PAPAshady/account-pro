import { redirect } from 'next/navigation';

import ProductDetails from '@templates/product/ProductDetails/ProductDetails';
import Navigation from '@templates/product/Navigation/Navigation';
import Introduction from '@templates/product/Introduction/Introduction';
import Plans from '@templates/product/Plans/Plans';
import ActivationMethods from '@templates/product/ActivationMethods/ActivationMethods';
import ImportantPoints from '@templates/product/ImportantPoints/ImportantPoints';
import Faq from '@templates/product/Faq/Faq';
import Comments from '@templates/product/Comments/Comments';
import { getProduct } from '@/services/products';

export default async function Product({ params }) {
  const { slug } = await params;
  const { data: product } = await getProduct(slug);
  return (
    <div className="container space-y-16 lg:space-y-24">
      <ProductDetails {...product} />
      <Navigation />
      <Introduction {...product} />
      <Plans />
      <ActivationMethods />
      <ImportantPoints />
      <Faq />
      <Comments />
    </div>
  );
}
