import { useRouter } from 'next/router';

export default function PresentationBanner() {
  const router = useRouter();

  return (
    <article
      style={{
        backgroundColor: 'gray',
      }}
    >
      <img src="" alt="Logo DGS" />
      <h1>Manejo y control del líquido vital</h1>
      <button onClick={() => router.push('/productos')}>Ver productos</button>
      <button onClick={() => router.push('/servicios')}>Ver servicios</button>
    </article>
  );
}
