import Layout from '@/components/layout/layout';
import { GetStaticProps } from 'next';
import { initStore, getAllProductsCard } from '../../lib/stores';
import type { ProductCardProps } from '@/components/product_card/product_card';
import ProductCard from '@/components/product_card/product_card';

export default function Home({ products }: { products: ProductCardProps[] }) {
  return (
    <>
      <Layout title="Inicio">
        <main>
          <h1>DGS Hidraulica</h1>
          {products.map((product) => (
            <ProductCard key={product.model} {...product} />
          ))}
        </main>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  initStore();
  const products = getAllProductsCard();
  return {
    props: {
      products,
    },
  };
};
