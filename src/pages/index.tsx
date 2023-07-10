import Layout from '@/components/layout/layout';
import { GetStaticProps } from 'next';
import { getAllProductsCard } from '../../lib/stores';
import type { ProductCardProps } from '@/components/product_card/product_card';
import ProductCard from '@/components/product_card/product_card';
import Form from '@/components/form/form';
import ContactButton from '@/components/button/whatsappButton';
import { useRouter } from 'next/router';
import PrincipalHero from '@/components/banners/principal_hero';

export default function Home({ products }: { products: ProductCardProps[] }) {
  const router = useRouter();

  const onClickWhatsAppButton = () => {
    router.push('https://wa.me/525624767064');
  };

  return (
    <Layout title="Inicio">
      <main>
        <PrincipalHero />
      </main>
      {products.map((product) => (
        <ProductCard key={product.model} {...product} />
      ))}
      <Form />
      <ContactButton onClick={onClickWhatsAppButton} image="/whatsapp.svg" />
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
