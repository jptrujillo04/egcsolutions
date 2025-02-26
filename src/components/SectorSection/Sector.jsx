"use client";
import React, { useRef, useEffect } from "react";
import styles from "./Sector.module.css"; // Importar los estilos locales

const sectors = [
  { name: "Sector Industrial", src: "/images/industrial.jpg" },
  { name: "Sector Minero", src: "/images/minero.jpg" },
  { name: "Sector Hospitalario", src: "/images/hospitalario.jpg" },
  { name: "Sector Industrial", src: "/images/industrial.jpg" },
  { name: "Sector Minero", src: "/images/minero.jpg" },
  { name: "Sector Hospitalario", src: "/images/hospitalario.jpg" },
];

export default function SectorsSection() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const cardWidth = sliderRef.current.querySelector(
          `.${styles.sectorCard}`
        ).clientWidth;
        sliderRef.current.scrollLeft += cardWidth + 16; // Ajusta el scroll en cada paso

        if (
          sliderRef.current.scrollLeft >=
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        ) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 4000); // Cambia cada 4 segundos para una transición más fluida

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.sectorsSection}>
      <h2 className={styles.sectorsTitle}>Sectores Donde Trabajamos</h2>
      <div className={styles.sectorsSlider} ref={sliderRef}>
        {sectors.map((sector, index) => (
          <div key={index} className={styles.sectorCard}>
            <img
              src={sector.src}
              alt={sector.name}
              className={styles.sectorImage}
            />
            <h3 className={styles.sectorName}>{sector.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
