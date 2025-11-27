import MenuManager from "../../../components/admin/MenuManager";
import styles from "../style.module.css";

export default function AdminMenuManagerPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <MenuManager />
      </div>
    </div>
  );
}
