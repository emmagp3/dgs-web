import { useRouter } from 'next/router';

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
    <section>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <button onClick={handleNavigateButton}>Ver producto</button>
    </section>
  );
}
