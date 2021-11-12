import Hero from "../components/Hero";
import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";

export default function Home({ products }) {
  return (
    <>
      <Hero />
      <ProductList products={products} />;
    </>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products },
  };
}
