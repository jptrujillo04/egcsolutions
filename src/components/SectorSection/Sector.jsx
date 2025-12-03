"use client";
import React from "react";
import styles from "./Sector.module.css"; // Importar los estilos locales

const sectors = [
  {
    name: "Planta Eléctrica en la Industria Alimentaria",
    icon: "/icons/sectoralimentario.png",
    description:
      "Instalación y mantenimiento de plantas eléctricas en empresas de alimentos.",
  },
  {
    name: "Soluciones Energéticas en el Sector Educativo",
    icon: "/icons/sectoreducativo.png",
    description:
      "Implementación de plantas para asegurar la continuidad del servicio en instituciones educativas.",
  },
  {
    name: "Proyectos en el Sector Salud",
    icon: "/icons/sectorhospitalario.png",
    description:
      "Energía crítica para hospitales y clínicas a través de nuestras plantas eléctricas.",
  },
  {
    name: "Sector Industrial",
    icon: "/icons/sectorindustria.png",
    description:
      "Soluciones de respaldo energético para la industria y procesos productivos.",
  },
  {
    name: "Sector Minero",
    icon: "/icons/sectorminero.png",
    description:
      "Equipos preparados para operar en condiciones exigentes del sector minero.",
  },
  {
    name: "Sector Comercial",
    icon: "/icons/sectorcomercial.png",
    description:
      "Continuidad del servicio en centros comerciales, oficinas y grandes superficies.",
  },
];

export default function SectorsSection() {
  return (
    <section className={styles.sectorsSection}>
      <h2 className={styles.sectorsTitle}>Sectores Donde Trabajamos</h2>
      <div className={styles.sectorsGrid}>
        {sectors.map((sector, index) => (
          <div key={index} className={styles.sectorCard}>
            <h3 className={styles.sectorName}>{sector.name}</h3>
            <div className={styles.iconWatermark}>
              <img
                src={sector.icon}
                alt={sector.name}
                className={styles.iconWatermarkImage}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
