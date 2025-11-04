import { Mic, Music } from "lucide-react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoLink}>
          <Music size={24} color="#ef4444" /> {/* text-red-500 */}
          <span className={styles.logoText}>TOKYOKÊ</span>
        </Link>

        <nav className={styles.nav}>
          <Link to="/">
            <button className={styles.navButton}>Home</button>
          </Link>
          <Link to="/cardapio">
            <button className={styles.navButton}>Cardápio</button>
          </Link>
          <Link to="/reservas">
            <button className={styles.navButton}>Reservas</button>
          </Link>
          <Link to="/perfil">
            <button className={styles.navButton}>Perfil</button>
          </Link>
        </nav>

        <button className={styles.menuButton}>
          <Mic size={20} />
        </button>
      </div>
    </header>
  );
}
