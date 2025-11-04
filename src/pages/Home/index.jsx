import AboutUs from "../../components/home/AboutUs";
import Hero from "../../components/home/hero";
import Services from "../../components/home/services";
import styles from "./style.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Hero />
        <Services />
        <AboutUs />
      </main>
    </div>
  );
}
