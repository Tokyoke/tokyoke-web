import { Link } from "react-router-dom";
import styles from "./style.module.css";

export default function AdminSidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <span className={styles.logo}>🎤</span>
        <div>
          <div className={styles.title}>TOKYOKÊ Admin</div>
        </div>
      </div>

      <nav className={styles.nav}>
        <Link to="/admin" className={styles.navLink}>Dashboard</Link>
        <Link to="#" className={styles.navLink}>Reservas</Link>
        <Link to="/admin/menu" className={styles.navLink}>Cardápio</Link>
        <Link to="#" className={styles.navLink}>Usuários</Link>
      </nav>

      <div className={styles.footerLink}>
        <Link to="/">Voltar ao site</Link>
      </div>
    </aside>
  );
}
