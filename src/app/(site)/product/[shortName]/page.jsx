import ProductDetails from '@templates/product/ProductDetails/ProductDetails';
import Navigation from '@templates/product/Navigation/Navigation';
import Introduction from '@templates/product/Introduction/Introduction';

export default function Product() {
  return (
    <div className="container space-y-16">
      <ProductDetails />
      <Navigation />
      <Introduction />
    </div>
  );
}
