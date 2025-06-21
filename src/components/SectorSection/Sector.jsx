"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./Sector.module.css";

const sectors = [
  { 
    id: 1,
    name: "Sector Industrial", 
    src: "/images/industrial.jpg",
    description: "Soluciones energéticas confiables para la industria manufacturera y de producción.",
    icon: "🏭"
  },
  { 
    id: 2,
    name: "Sector Minero", 
    src: "/images/minero.jpg",
    description: "Energía ininterrumpida para operaciones mineras críticas.",
    icon: "⛏️"
  },
  { 
    id: 3,
    name: "Sector Hospitalario", 
    src: "/images/hospitalario.jpg",
    description: "Suministro eléctrico confiable para instalaciones médicas esenciales.",
    icon: "🏥"
  },
  { 
    id: 4,
    name: "Sector Comercial", 
    src: "/images/industrial.jpg",
    description: "Soluciones energéticas para centros comerciales y negocios.",
    icon: "🏢"
  },
  { 
    id: 5,
    name: "Sector Residencial", 
    src: "/images/minero.jpg",
    description: "Energía confiable para hogares y comunidades.",
    icon: "🏠"
  },
  { 
    id: 6,
    name: "Sector Gubernamental", 
    src: "/images/hospitalario.jpg",
    description: "Soluciones energéticas para instituciones públicas.",
    icon: "🏛️"
  },
];

export default function SectorsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sliderRef = useRef(null);
  const cardRefs = useRef([]);
  const isAnimating = useRef(false);

  // Función para manejar el avance del carrusel
  const handleNext = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    
    setCurrentIndex(prevIndex => {
      const nextIndex = (prevIndex + 1) % sectors.length;
      return nextIndex;
    });
    
    // Permitir la siguiente animación después de un pequeño retraso
    setTimeout(() => {
      isAnimating.current = false;
    }, 100);
  };

  // Función para manejar el retroceso del carrusel
  const handlePrev = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    
    setCurrentIndex(prevIndex => {
      const prevIndexNew = (prevIndex - 1 + sectors.length) % sectors.length;
      return prevIndexNew;
    });
    
    setTimeout(() => {
      isAnimating.current = false;
    }, 100);
  };
  
  // Función para ir a un índice específico
  const goToIndex = (index) => {
    if (isAnimating.current || index === currentIndex) return;
    isAnimating.current = true;
    setCurrentIndex(index);
    
    setTimeout(() => {
      isAnimating.current = false;
    }, 100);
  };

  // Efecto para el autoplay
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, currentIndex]);

  // Efecto para manejar el scroll al cambiar de tarjeta
  useEffect(() => {
    const container = sliderRef.current;
    const card = cardRefs.current[currentIndex];
    if (!container || !card) return;
    
    // Calcular la posición de scroll para alinear la tarjeta a la izquierda
    const containerWidth = container.offsetWidth;
    const cardWidth = card.offsetWidth;
    const gap = 24; // Mismo valor que en el CSS
    let scrollLeft = card.offsetLeft - gap;
    
    // Si es la última tarjeta, alinear al final
    if (currentIndex === sectors.length - 1) {
      scrollLeft = container.scrollWidth - containerWidth;
    }
    
    // Hacer scroll suave
    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
  }, [currentIndex]);

  // Efecto para posicionar la primera tarjeta al cargar
  useEffect(() => {
    if (sliderRef.current) {
      // Asegurarse de que el contenedor esté completamente renderizado
      setTimeout(() => {
        const container = sliderRef.current;
        if (!container) return;
        
        // Iniciar con scroll a la izquierda (primera tarjeta)
        container.scrollLeft = 0;
      }, 50);
    }
  }, []);

  return (
    <section 
      className={styles.sectorsSection} 
      aria-label="Sectores que atendemos"
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.sectorsTitle}>Sectores que Atendemos</h2>
          <p className={styles.subtitle}>Soluciones energéticas personalizadas para cada industria</p>
        </div>

        <div 
          className={styles.sectorsSlider} 
          ref={sliderRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setTimeout(() => setIsHovered(false), 2000)}
        >
          {sectors.map((sector, index) => (
            <article 
              key={sector.id}
              ref={el => cardRefs.current[index] = el}
              className={`${styles.sectorCard} ${index === currentIndex ? styles.visible : ''}`}
              aria-labelledby={`sector-${sector.id}-title`}
              tabIndex={0}
            >
              <div className={styles.cardImageContainer}>
                <Image
                  src={sector.src}
                  alt=""
                  fill
                  className={styles.sectorImage}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index < 3}
                />
                <div className={styles.imageOverlay} />
                <span className={styles.sectorIcon} aria-hidden="true">
                  {sector.icon}
                </span>
              </div>
              <div className={styles.cardContent}>
                <h3 id={`sector-${sector.id}-title`} className={styles.sectorName}>
                  {sector.name}
                </h3>
                <p className={styles.sectorDescription}>{sector.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.dotsContainer}>
          {sectors.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => goToIndex(index)}
              aria-label={`Ir al sector ${index + 1} de ${sectors.length}`}
              aria-current={index === currentIndex ? 'step' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
