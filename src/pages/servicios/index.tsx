import { GetStaticProps } from 'next';
import { getAllServices } from '../../../lib/stores';
import type { ServiceModel } from '../../../lib/models';
import Layout from '@/components/layout/layout';
import Service from '@/components/service/service';

export default function Servicios({ services }: { services: ServiceModel[] }) {
  return (
    <Layout title="Servicios">
      {services.map((service) => (
        <Service key={service.id} {...service} />
      ))}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const services = getAllServices();
  return {
    props: {
      services,
    },
  };
};
