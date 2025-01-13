import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>EGC Solutions</h1>
        <nav>
          <Link href="#services" className={styles.navLink}>
            Servicios
          </Link>
          <Link href="#about" className={styles.navLink}>
            Nosotros
          </Link>
          <Link href="#contact" className={styles.navLink}>
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
