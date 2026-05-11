import ProductCard from '@modules/Cards/ProductCard/ProductCard';

export default function ProductsGrid({ products, isPending }) {
  if (isPending) {
    return <p>در حال دریافت محصولات...</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-4 xl:grid-cols-3 xl:gap-6">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          title={product.title}
          price={product.price}
          region={product.region}
          image={product.images[0].url}
          slug={product.slug}
        />
      ))}
    </div>
  );
}
