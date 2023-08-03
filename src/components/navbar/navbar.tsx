import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const router = useRouter();

  const isActive = (currentPath: string) => {
    if (router.pathname.startsWith(currentPath, 1)) {
      return 'active';
    }
    return '';
  };

  const toggleMenu = (event: any) => {
    event.preventDefault();
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className={styles.header}>
      <h1>
        <Link href="/">DGS Hidráulica</Link>
      </h1>
      <Link href={''} className={styles['toggle-btn']} onClick={toggleMenu}>
        {!isMenuVisible ? 'Menú' : 'Cerrar'}
      </Link>
      <nav className={`${styles.nav} ${!isMenuVisible ? styles.dnone : ''}`}>
        <Link
          className={styles[isActive('sobre-nosotros')]}
          href="/sobre-nosotros"
        >
          ¿Quiénes Somos?
        </Link>
        <Link className={styles[isActive('productos')]} href="/productos">
          Productos
        </Link>
        <Link className={styles[isActive('servicios')]} href="/servicios">
          Servicios
        </Link>
        <Link className={styles[isActive('/')]} href="/#contacto">
          Contacto
        </Link>
        <Image
          src="/vamex.jpg"
          alt="Vamex distribuidor autorizado"
          width={100}
          height={30}
          className={styles.img}
        />
      </nav>
    </header>
  );
}
