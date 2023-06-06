import Layout from '@/components/layout/layout';
import { GetStaticProps } from 'next';
import { getAllProductsCard } from '../../lib/stores';
import type { ProductCardProps } from '@/components/product_card/product_card';
import ProductCard from '@/components/product_card/product_card';
import Form from '@/components/form/form';
import { FormEvent } from 'react';

export default function Home({ products }: { products: ProductCardProps[] }) {
  return (
    <>
      <Layout title="Inicio">
        <h1>DGS Hidraulica</h1>
        {products.map((product) => (
          <ProductCard key={product.model} {...product} />
        ))}
        <Form />
      </Layout>
    </>
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
