import ProductDetails from '@templates/product/ProductDetails/ProductDetails';
import Navigation from '@templates/product/Navigation/Navigation';

export default function Product() {
  return (
    <div className="container space-y-16">
      <ProductDetails />
      <Navigation />
    </div>
  );
}
