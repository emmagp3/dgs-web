import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getAllProductPaths,
  getProductDetails,
} from '../../../lib/stores/product.store';
import type { ProductModel } from '../../../lib/models';
import Layout from '@/components/layout/layout';
import { useRouter } from 'next/router';

export default function ProductPage({ product }: { product: ProductModel }) {
  const router = useRouter();
  const { name, model, description, image } = product;

  return (
    <Layout title={name}>
      <button onClick={router.back}>Volver atrás</button>
      <article>
        <h2>{name}</h2>
        <h3>
          Modelo: <small>{model}</small>
        </h3>
        <p>{description}</p>
        <img src={image} alt={name} />
        <button>Contactar al vendedor</button>
      </article>
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
