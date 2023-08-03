import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContent} container`}>
        <div>
          <h2>Horarios</h2>
          <p>Lun-Vie: 09:00 - 18:00</p>
          <p>Sábados: 09:00 - 15:00</p>
          <p>Domingos: Cerrado</p>
        </div>
        <div>
          <h2>Ubicación</h2>
          <p>Miguel Hidalgo, CDMX</p>
        </div>
      </div>
      <p>¡Síguenos en nuestras redes sociales!</p>
    </footer>
  );
}
