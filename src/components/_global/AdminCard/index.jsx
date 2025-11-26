import styles from "./style.module.css";

export default function AdminCard({ title, value, subtitle, highlight }) {
  return (
    <div className={`${styles.card} ${highlight ? styles.highlight : ""}`}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardValue}>{value}</div>
      {subtitle && <div className={styles.cardSubtitle}>{subtitle}</div>}
    </div>
  );
}
