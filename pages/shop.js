import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";

export default function Home({ products }) {
  return (
    <div className="pt-24 ">
      <h2 className="mt-12 text-5xl text-center">All Products</h2>
      <ProductList products={products} />;
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products },
  };
}
