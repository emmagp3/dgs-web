import Layout from '@/components/layout/layout';
import styles from './sobre-nosotos.module.css';

export default function AboutPage() {
  return (
    <Layout title="¿Quiénes Somos?">
      <div className={styles.hero}>
        <h2 className={styles.title}>Acerca de Nosotros</h2>
        <div className={`${styles.about} container`}>
          <div className={styles.element}>
            <h2 className={styles.subtitle}>Desarrollo</h2>
            <p>
              En nuestra empresa nos preocupamos por la búsqueda constante de
              nuevas soluciones tecnológicas en nuestros productos y servicios
              para mejorar la eficiencia y la calidad del agua.
            </p>
          </div>
          <div className={styles.element}>
            <h2 className={styles.subtitle}>Garantía</h2>
            <p>
              Nuestros productos y servicios cumplen con la normatividad y
              estándares altos de calidad para asegurar la confianza y
              satisfacción de nuestros clientes, implementando medidas y
              políticas rigurosas en todo momento.
            </p>
          </div>
          <div className={styles.element}>
            <h2 className={styles.subtitle}>Sustentable</h2>
            <p>
              Nuestro compromiso es apoyar suministrando elementos que ayuden a
              eliminar fugas y con ello lograr una mejor eficacia de su uso en
              áreas de la industria, agua potable, agricultura, ganadería,
              alcantarillado y saneamiento
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.misionVisionSection} container`}>
        <div className={styles.misionVisionContent}>
          <h2>Misión</h2>
          <p>
            Nuestra visión como empresa es ser reconocidos por la excelencia en
            nuestros productos y servicios, y para lograrlo nos enfocamos en
            suministrar equipos de vanguardia con los mejores materiales de
            calidad que ofrezcan soluciones óptimas y sostenibles a nuestros
            clientes. Asimismo, buscamos expandir nuestra presencia en nuevos
            mercados y fortalecer nuestra posición en los ya existentes a través
            de alianzas estratégicas. Nos preocupamos por mantener una cultura
            organizacional basada en el desarrollo humano, la ética y el
            compromiso social, donde nuestro equipo de trabajo se sienta
            motivado y comprometido con nuestros objetivos y metas. Así, nos
            aseguramos de contar con el mejor talento humano y ofrecer un
            servicio de alta calidad.
          </p>
        </div>
        <div className={styles.misionVisionContent}>
          <h2>Visión</h2>
          <p>
            Nuestra misión es brindar a nuestros clientes productos confiables y
            duraderos que satisfagan sus necesidades y expectativas, y así
            contribuir a mejorar la vida útil de sus instalaciones. Para
            lograrlo trabajamos con un equipo altamente capacitado y
            comprometido en la investigación y desarrollo para ofrecer nuevos
            productos, así como en la mejora continua de servicio al cliente.
            Además, nos aseguramos de cumplir con los estándares de calidad y
            normativas legales de todos los materiales. Nos enfocamos en
            establecer relaciones sólidas con nuestros clientes, proveedores y
            colaboradores, basadas en la confianza y el respeto mutuo.
          </p>
        </div>
      </div>
    </Layout>
  );
}
