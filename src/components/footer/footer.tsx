import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h2>Ubicación</h2>
          <p>Calle S/N</p>
          <p>Delegación</p>
          <p>Cuidad de México</p>
          <p>CP: XXXXXX</p>
        </div>
        <div>
          <h2>Horarios</h2>
          <p>Lun-Vie: xx:xx - xx:xx</p>
          <p>Sábados: xx:xx - xx:xx</p>
          <p>Domingos: xx:xx - xx:xx</p>
        </div>
      </div>
      <div>
        <p>¡Síguenos en nuestras redes sociales!</p>
      </div>
    </footer>
  );
}
