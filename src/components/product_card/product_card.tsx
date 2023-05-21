export interface ProductCardProps {
  model: string;
  name: string;
  image: string;
}

export default function ProductCard({ name, image }: ProductCardProps) {
  return (
    <section>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <button
        onClick={() => console.log('TODO: enviar a la página del producto')}
      >
        Ver producto
      </button>
    </section>
  );
}
