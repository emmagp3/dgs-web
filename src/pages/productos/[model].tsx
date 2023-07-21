import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getAllProductPaths,
  getProductDetails,
} from '../../../lib/stores/product.store';
import type { ProductModel } from '../../../lib/models';
import Layout from '@/components/layout/layout';
import { useRouter } from 'next/router';
import ContactButton from '@/components/button/whatsappButton';
import { parseUrl } from 'next/dist/shared/lib/router/utils/parse-url';
import Link from 'next/link';
import styles from './products.module.css';

export default function ProductPage({ product }: { product: ProductModel }) {
  const router = useRouter();
  const { name, model, description, image } = product;

  const onClickWhatsAppButton = () => {
    const message = parseUrl(
      `https://wa.me/525624767064?text=Me gustaría obtener más información acerca del producto ${name} con el modelo ${model}. ${window.location.href}`
    );
    router.push(message);
  };

  return (
    <Layout title={name}>
      <main className="container">
        <Link href="/productos">Ver productos</Link>
        <div className={`${styles.details} flex`}>
          <img className={styles.image} src={image} alt={name} />
          <div className="flex flex-column">
            <h2 className={styles.title}>{name}</h2>
            <h3 className={styles.model}>
              Modelo: <small>{model}</small>
            </h3>
            <p className={styles.description}>{description}</p>
            <ContactButton onClick={onClickWhatsAppButton} />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllProductPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const model = params?.model as string;
  const product = getProductDetails(model);

  return {
    props: {
      product,
    },
  };
};
