import { Instagram, Mail, Phone } from "lucide-react";
import styles from "./style.module.css";

export default function Footer() {
  return (
    <footer id="contato" className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h4 className={styles.sectionTitle}>Tokyokê | Karaokê & Diversão</h4>
          <p className={styles.sectionText}>Onde a música encontra sua voz!</p>
        </div>

        <div>
          <h4 className={styles.sectionTitle}>Localização</h4>
          <p className={styles.sectionText}>
            Travessa Nippon, 18 - Liberdade,
            <br />
            São Paulo - SP
          </p>
        </div>

        <div>
          <h4 className={styles.sectionTitle}>Contato</h4>
          <div className={styles.contactLinks}>
            <a href="tel:11982345617" className={styles.contactLink}>
              <Phone size={16} />
              (11) 98234-5617
            </a>
            <a
              href="mailto:atendimento@tokyoke.com.br"
              className={styles.contactLink}
            >
              <Mail size={16} />
              atendimento@tokyoke.com.br
            </a>
            <a href="#" className={styles.contactLink}>
              <Instagram size={16} />
              @TokyokeSP
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>
          &copy; {new Date().getFullYear()} Tokyokê. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
