"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Brand.module.css";
import { FaWhatsapp } from "react-icons/fa";

const brands = [
  { name: "comap", src: "/images/logocomap.png", alt: "comap" },
  { name: "abb", src: "/images/abb.jpg", alt: "abb" },
  { name: "dosan", src: "/images/dosan.jpg", alt: "dosan" },
  { name: "perkins", src: "/images/perkins.jpg", alt: "perkins" },
  { name: "standford", src: "/images/standford.jpg", alt: "standford" },
];

export default function BrandsSection() {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += isMobile ? 405 : 500; // Ajusta velocidad según el dispositivo
        if (
          sliderRef.current.scrollLeft >=
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        ) {
          sliderRef.current.scrollLeft = 0;
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className={styles.brandsSection}>
      <h2 className={styles.brandsTitle}>Marcas Que Comercializamos</h2>
      <div className={styles.brandsSlider} ref={sliderRef}>
        {isMobile
          ? [...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className={styles.brandContainer}
                style={{ minWidth: "100%", textAlign: "center" }}
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className={styles.brandLogo}
                  style={{ width: "150px", height: "auto" }}
                  loading="lazy"
                />
              </div>
            ))
          : brands.map((brand, index) => (
              <div
                key={index}
                className={styles.brandContainer}
                style={{ flex: "0 0 25%", textAlign: "center" }}
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className={styles.brandLogo}
                  style={{ width: "150px", height: "auto" }}
                  loading="lazy"
                />
              </div>
            ))}
      </div>
      <div className={styles.wave}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,0V60c0,0,292.5-50,720,0s720,0,720,0V0Z" className={styles.shapeFill}></path>
        </svg>
      </div>
    </section>
  );
}
