import { GetStaticProps } from 'next';
import { getAllServices } from '../../../lib/stores';
import type { ServiceModel } from '../../../lib/models';
import Layout from '@/components/layout/layout';
import Service from '@/components/service/service';
import styles from './servicios.module.css';

export default function Servicios({ services }: { services: ServiceModel[] }) {
  return (
    <Layout title="Servicios">
      <h2 className="container">Nuestros servicios</h2>
      <div className={`container ${styles.services}`}>
        {services.map((service) => (
          <Service key={service.id} {...service} />
        ))}
      </div>
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
