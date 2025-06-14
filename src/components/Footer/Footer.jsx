import styles from "./Footer.module.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Contenido principal */}
      <div className={styles.container}>
        {/* Contacto */}
        <div id="contact" className={styles.contact}>
          <h3>CONTÁCTANOS</h3>
          <p>Dirección: AK 70 # 74C - 30 Bogotá, Colombia</p>
          <p>
            Contacto: (+57) 320 339 7813{" "}
            <a
              href="https://wa.me/573203397813?text=Hola%20EGC%20Solutions,%20estoy%20interesado%20en%20sus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsapp}
            >
              <FaWhatsapp />
            </a>
          </p>
          <p>Contacto Oficina: (601) 704 6518</p>
        </div>

        {/* Redes Sociales */}
        <div className={styles.social}>
          <h3>SÍGUENOS</h3>
          <div className={styles["social-icons"]}>
            <a
              href="https://www.facebook.com/profile.php?id=100067477128926"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Logo y Correo */}
        <div className={styles.brand}>
          <Image
            src="/logo.png"
            alt="EGC Solutions Logo"
            width={100}
            height={100}
            className={styles.logo}
          />
          <p className={styles.email}>egc.solutions.ltda@gmail.com</p>
        </div>
      </div>

      {/* Derechos reservados */}
      <p className={styles.footerText}>
        © {new Date().getFullYear()} EGC Solutions. Todos los derechos
        reservados.
      </p>
    </footer>
  );
}
