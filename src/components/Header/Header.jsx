"use client";
import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo y texto */}
        <div className={styles["logo-container"]}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="EGC Solutions Logo"
              width={30}
              height={30}
              className={styles.logo}
            />
          </Link>
          <span>EGC Solutions</span>
        </div>

        {/* Menú hamburguesa */}
        <div
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div />
          <div />
          <div />
        </div>

        {/* Navegación */}
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          {menuOpen && (
            <button
              className={styles.closeButton}
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              ×
            </button>
          )}
          <Link href="#services" className={styles.navLink} onClick={toggleMenu}>
            Servicios
          </Link>
          <Link href="#about" className={styles.navLink} onClick={toggleMenu}>
            Nosotros
          </Link>
          <Link href="#contact" className={styles.navLink} onClick={toggleMenu}>
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
