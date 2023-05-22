import { ServiceModel } from '../../../lib/models';

export default function Service({ name, description }: ServiceModel) {
  return (
    <article>
      <h2>{name}</h2>
      <p>{description}</p>
      <button>Más información</button>
    </article>
  );
}
