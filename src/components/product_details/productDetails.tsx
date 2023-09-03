import { useRouter } from 'next/router';
import Button from '../button/button';
import ContactButton from '../button/whatsappButton';
import { parseUrl } from 'next/dist/shared/lib/router/utils/parse-url';
import { ProductModel } from '../../../lib/models';
import styles from './productDetails.module.css';

export default function ProductDetails({ product }: { product: ProductModel }) {
  const router = useRouter();

  const { name, model, description, image } = product;

  const onClickWhatsAppButton = () => {
    const message = parseUrl(
      `https://wa.me/525624767064?text=Me gustaría obtener más información acerca del producto ${name} con el modelo ${model}. ${window.location.href}`
    );
    router.push(message);
  };

  return (
    <div className={`${styles.details}`}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.content}>
        <div>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.model}>
            Modelo: <small>{model}</small>
          </p>
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttons}>
          <Button variant="secondary" onClick={() => router.push('/productos')}>
            Volver a Productos
          </Button>
          <ContactButton onClick={onClickWhatsAppButton} />
        </div>
      </div>
    </div>
  );
}
