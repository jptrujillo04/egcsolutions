import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import styles from "./Services.module.css";

export default function Services() {
  const services = [
    {
      title: "Revisión y Diagnóstico General (Overhaul)",
      description: "Mantenimientos preventivos por solicitud o contrato para garantizar el óptimo funcionamiento de sus equipos.",
      image: "/images/overhaul.jpg"
    },
    {
      title: "Sistema de Transferencia",
      description: "Diagnóstico, revisión, suministro e instalación de sistemas de transferencia automática para sus equipos.",
      image: "/images/transferencia.jpg"
    },
    {
      title: "Sistema de Control y Protección",
      description: "Diagnóstico, configuración y suministro de módulos, indicadores, sensores y switches para la protección de sus equipos.",
      image: "/images/control.jpg"
    },
    {
      title: "Radiadores",
      description: "Servicio especializado en mantenimiento de radiadores: desarme, limpieza, desincrustación y pintura para óptimo rendimiento.",
      image: "/images/radiador.jpg"
    },
    {
      title: "Alquiler de Equipos",
      description: "Amplia gama de plantas eléctricas y bancos resistivos en alquiler para cubrir sus necesidades temporales de energía.",
      image: "/images/planta.jpg"
    },
    {
      title: "Tanques y Suministro de Combustible",
      description: "Suministro de tanques de combustible y todos los insumos necesarios para el correcto funcionamiento de sus equipos.",
      image: "/images/tanques.jpg"
    },
  ];

  return (
    <section className={styles.services} id="servicios">
      <h2 className={styles.title}>Nuestros Servicios</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <article key={index} className={styles.card}>
            <div className={styles.imageContainer}>
              <img
                src={service.image}
                alt={service.title}
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.content}>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.buttonsContainer}>
        <Link href="/services" className={styles.secondaryButton}>
          Ver todos los servicios
        </Link>
        <a
          href="https://wa.me/573203397813?text=Hola%20EGC%20Solutions,%20estoy%20interesado%20en%20sus%20servicios."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.primaryButton}
        >
          <FaWhatsapp className={styles.icon} /> ¡Contáctanos ahora!
        </a>
      </div>
      <div className={styles.wave}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0V60c0,0,292.5-50,720,0s720,0,720,0V0Z" className={styles.shapeFill}></path>
        </svg>
      </div>
    </section>
  );
}
