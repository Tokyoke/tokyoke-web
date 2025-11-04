import { Link } from "react-router-dom";
import styles from "./style.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>TOKYOKÊ</h1>
        <h2 className={styles.subtitle}>Onde a música encontra sua voz!</h2>

        <div className={styles.buttonGroup}>
          <Link to="/reservas" className={`${styles.button} ${styles.buttonPrimary}`}>
            Fazer Reserva
          </Link>

          <Link to="/cardapio" className={`${styles.button} ${styles.buttonOutline}`}>
            Ver Cardápio
          </Link>
        </div>
      </div>
    </section>
  );
}
