import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const isActive = (currentPath: string) => {
    if (currentPath === router.pathname) {
      return 'active';
    }
    return '';
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link
            className={`${styles.link} ${styles.title} ${
              styles[isActive('/')]
            }`}
            href="/">
            DGS HIDRAULICA
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            className={`${styles.link} ${styles[isActive('/sobre-nosotros')]}`}
            href="/sobre-nosotros">
            ¿Quiénes somos?
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            className={`${styles.link} ${styles[isActive('/productos')]}`}
            href="/productos">
            Productos
          </Link>
        </li>
        <li className={styles.li}>
          <Link
            className={`${styles.link} ${styles[isActive('/servicios')]}`}
            href="/servicios">
            Servicios
          </Link>
        </li>
        <li className={styles.li}>
          <Link className={styles.link} href="/#contacto">
            Contacto
          </Link>
        </li>
        <li className={styles.li}>
          <Image
            src="/vamex.jpg"
            alt="Distribuidor Autorizado VAMEX"
            className={styles.vamex}
            width={375}
            height={128}
          />
        </li>
      </ul>
      {/* <div>*TODO: VAMEX DISTRIBUIDOR AUTORIZADO</div> */}
    </nav>
  );
}
