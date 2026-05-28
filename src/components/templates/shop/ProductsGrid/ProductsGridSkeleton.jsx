import ProductCardSkeleton from '@modules/Cards/ProductCard/ProductCardSkeleton';

export default function ProductsGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-4 xl:grid-cols-3 xl:gap-6">
      {Array(3)
        .fill()
        .map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
    </div>
  );
}
