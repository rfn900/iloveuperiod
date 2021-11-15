import ProductCard from "../components/ProductCard";

export default function ProductList({ products }) {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 py-4 sm:px-6 lg:max-w-7xl">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
