interface ProductProps {
  name: string;
  image: string;
}

export default function Product({ name, image }: ProductProps) {
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
