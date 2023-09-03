import { GetServerSideProps } from 'next';
import {
  getAllProductPaths,
  getProductDetails,
} from '../../../lib/stores/product.store';
import type { ProductModel } from '../../../lib/models';
import Layout from '@/components/layout/layout';
import ProductDetails from '@/components/product_details/productDetails';

export default function ProductPage({ product }: { product: ProductModel }) {
  const { name } = product;

  return (
    <Layout title={name}>
      <main className="container">
        <ProductDetails product={product} />
      </main>
    </Layout>
  );
}

export const getServerSidePaths = async () => {
  const paths = getAllProductPaths();
  return {
    paths,
    fallback: false,
  };
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const model = params?.model as string;
  const product = getProductDetails(model);

  return {
    props: {
      product,
    },
  };
};
