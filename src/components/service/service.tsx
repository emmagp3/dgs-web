interface ServiceProps {
  title: string;
  description: string;
}

export default function Service({ title, description }: ServiceProps) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <button>Más información</button>
    </article>
  );
}
