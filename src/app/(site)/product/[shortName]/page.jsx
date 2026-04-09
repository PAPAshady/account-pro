import ProductDetails from '@templates/product/ProductDetails/ProductDetails';
import Navigation from '@templates/product/Navigation/Navigation';
import Introduction from '@templates/product/Introduction/Introduction';
import Plans from '@templates/product/Plans/Plans';
import ActivationMethods from '@templates/product/ActivationMethods/ActivationMethods';
import ImportantPoints from '@templates/product/ImportantPoints/ImportantPoints';

export default function Product() {
  return (
    <div className="container space-y-16 lg:space-y-24">
      <ProductDetails />
      <Navigation />
      <Introduction />
      <Plans />
      <ActivationMethods />
      <ImportantPoints />
    </div>
  );
}
