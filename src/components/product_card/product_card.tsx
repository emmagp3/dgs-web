import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './product_card.module.css';
import Button from '../button/button';

export interface ProductCardProps {
  model: string;
  name: string;
  image: string;
}

export default function ProductCard({ model, name, image }: ProductCardProps) {
  const router = useRouter();

  const handleNavigateButton = () => {
    const productPath = `/productos/${model}`;
    router.push(productPath);
  };

  return (
    <section className={styles.product}>
      <h3>{name}</h3>
      <Image
        className={styles.image}
        src={image}
        alt={name}
        width={200}
        height={200}
      />
      <Button onClick={handleNavigateButton}>Ver producto</Button>
    </section>
  );
}
