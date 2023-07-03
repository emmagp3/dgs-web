import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getAllProductPaths,
  getProductDetails,
} from '../../../lib/stores/product.store';
import type { ProductModel } from '../../../lib/models';
import Layout from '@/components/layout/layout';
import { useRouter } from 'next/router';
import ContactButton from '@/components/whatsapp_button/whatsappButton';
import { parseUrl } from 'next/dist/shared/lib/router/utils/parse-url';

export default function ProductPage({ product }: { product: ProductModel }) {
  const router = useRouter();
  const { name, model, description, image } = product;

  const onClickWhatsAppButton = () => {
    const message = parseUrl(
      `https://wa.me/525624767064?text=Me gustaría obtener más información acerca del producto ${name} con el modelo ${model}. ${window.location.href}`
    );
    router.push(message);
  };

  const onClickBackButton = () => {
    router.push('/productos');
  };

  return (
    <Layout title={name}>
      <button onClick={onClickBackButton}>Ver productos</button>
      <main>
        <div>
          <h2>{name}</h2>
          <h3>
            Modelo: <small>{model}</small>
          </h3>
          <p>{description}</p>
          <img src={image} alt={name} />
          <ContactButton onClick={onClickWhatsAppButton} />
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
