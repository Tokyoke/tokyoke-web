import styles from "./style.module.css";

export default function AboutUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.title}>Quem Somos?</h3>

        <p className={styles.paragraph}>
          Inaugurado recentemente no coração do bairro da Liberdade, o Tokyokê
          traz uma proposta moderna que combina a estética vibrante do cenário
          asiático com a diversidade musical do mundo inteiro.
        </p>

        <p className={styles.paragraph}>
          Aqui, todo mundo é bem-vindo para soltar a voz. Venha viver essa
          experiência com a gente!
        </p>
      </div>
    </section>
  );
}
