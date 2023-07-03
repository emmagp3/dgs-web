import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">DGS HIDRAULICA</Link>
        </li>
        <li>
          <Link href="/sobre-nosotros">¿Quiénes somos?</Link>
        </li>
        <li>
          <Link href="/productos">Productos</Link>
        </li>
        <li>
          <Link href="/servicios">Servicios</Link>
        </li>
        <li>
          <Link href="/#contacto">Contacto</Link>
        </li>
      </ul>
      <div>{/**TODO: VAMEX DISTRIBUIDOR AUTORIZADO */}</div>
    </nav>
  );
}
