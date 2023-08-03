import Layout from '@/components/layout/layout';
import { GetStaticProps } from 'next';
import { getAllProductsCard } from '../../lib/stores';
import type { ProductCardProps } from '@/components/product_card/product_card';
import ProductCard from '@/components/product_card/product_card';
import Form from '@/components/form/form';
import PrincipalHero from '@/components/banners/principal_hero';
import styles from '../styles/Home.module.css';

export default function Home({ products }: { products: ProductCardProps[] }) {
  return (
    <Layout title="Inicio">
      <main>
        <PrincipalHero />
      </main>
      <div className={`container ${styles.products}`}>
        <h2 className="text-center">Nuestros productos</h2>
        <div className="flex">
          {products.map((product) => (
            <ProductCard key={product.model} {...product} />
          ))}
        </div>
      </div>
      <Form />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Solo obtiene los primeros tres productos.
  const products = getAllProductsCard().slice(0, 3);
  return {
    props: {
      products,
    },
  };
};
