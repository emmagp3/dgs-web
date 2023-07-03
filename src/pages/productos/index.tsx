import Layout from '@/components/layout/layout';
import { GetStaticProps } from 'next';
import { getAllProductsCard } from '../../../lib/stores';
import type { ProductCardProps } from '@/components/product_card/product_card';
import ProductCard from '@/components/product_card/product_card';

export default function Product({
  products,
}: {
  products: ProductCardProps[];
}) {
  return (
    <Layout title="Productos">
      <main>
        {products.map((product) => (
          <ProductCard key={product.model} {...product} />
        ))}
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const products = getAllProductsCard();
  return {
    props: {
      products,
    },
  };
};
