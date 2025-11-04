import { Calendar, Mic, Utensils } from "lucide-react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Nossos Serviços</h3>

      <div className={styles.grid}>
        {/* Card 1 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}>
              <Utensils size={48} color="#ef4444" />
            </div>
            <h4 className={styles.cardTitle}>Cardápio/Bar</h4>
            <p className={styles.cardDescription}>
              Descubra nossos drinks e porções.
            </p>
          </div>
          <div className={styles.cardContent}>
            Uma seleção completa de bebidas, coquetéis e petiscos para
            acompanhar sua cantoria.
          </div>
          <div className={styles.cardFooter}>
            <Link to="/cardapio" className={`${styles.button} ${styles.buttonOutline}`}>
              Ver Cardápio Completo
            </Link>
          </div>
        </div>

        {/* Card 2 (Destaque) */}
        <div className={`${styles.card} ${styles.cardHighlight}`}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}>
              <Calendar size={48} color="#ef4444" />
            </div>
            <h4 className={styles.cardTitle}>Reservas</h4>
            <p className={styles.cardDescription}>
              Garanta sua sala privativa.
            </p>
          </div>
          <div className={styles.cardContent}>
            Reserve online de forma fácil e rápida. Perfeito para festas, eventos
            ou uma noite divertida com amigos.
          </div>
          <div className={styles.cardFooter}>
            <Link href="/reservas" className={`${styles.button} ${styles.buttonPrimary}`}>
              Agendar Agora
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}>
              <Mic size={48} color="#ef4444" />
            </div>
            <h4 className={styles.cardTitle}>Biblioteca Musical</h4>
            <p className={styles.cardDescription}>
              Milhares de músicas à sua escolha.
            </p>
          </div>
          <div className={styles.cardContent}>
            Do pop ao rock, do sertanejo ao k-pop. Nosso catálogo é atualizado
            constantemente.
          </div>
          <div className={styles.cardFooter}>
            <Link href="/biblioteca" className={`${styles.button} ${styles.buttonOutline}`}>
              Explorar Músicas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
