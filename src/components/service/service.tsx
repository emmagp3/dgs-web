import { ServiceModel } from '../../../lib/models';
import Button from '../button/button';
import styles from './service.module.css';

export default function Service({ name, description }: ServiceModel) {
  return (
    <div className={`${styles.service} flex flex-column`}>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <Button variant="primary">Más información</Button>
    </div>
  );
}
