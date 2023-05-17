import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">DGS HIDRAULICA</Link>
        </li>
        <li>
          <Link href="#">¿Quiénes somos?</Link>
        </li>
        <li>
          <Link href="#">Productos</Link>
        </li>
        <li>
          <Link href="#">Servicios</Link>
        </li>
        <li>
          <Link href="#">Contacto</Link>
        </li>
      </ul>
      <div>{/**TODO: VAMEX DISTRIBUIDOR AUTORIZADO */}</div>
    </nav>
  );
}
