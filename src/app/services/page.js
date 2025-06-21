"use client";

import { useState, useRef } from "react";
import styles from "./services.module.css";

export default function ServicesPage() {
  const titleRef = useRef(null);
  const services = [
    {
      title: "REVISIÓN Y DIAGNÓSTICO GENERAL (OVERHAUL)",
      description: "Mantenimientos preventivos por solicitud o contrato",
      image: "/images/overhaul.jpg",
    },
    {
      title: "SISTEMA DE TRANSFERENCIA",
      description:
        "Diagnóstico y revisión, suministro de productos, instalaciones",
      image: "/images/transferencia.jpg",
    },
    {
      title: "SISTEMA DE CONTROL Y PROTECCIÓN",
      description:
        "Diagnóstico, configuración, suministro de módulos, indicadores, sensores, switches, etc.",
      image: "/images/control.jpg",
    },
    {
      title: "RADIADORES",
      description:
        "Desarme, sondeo, desincrustada de partes contaminadas, pintura y fluchin para retirar impurezas al bloque del motor.",
      image: "/images/radiador.jpg",
    },
    {
      title: "ALQUILER",
      description: "Alquiler de plantas eléctricas y bancos resistivos",
      image: "/images/planta.jpg",
    },
    {
      title: "TANQUES Y SUMINISTRO DE COMBUSTIBLE",
      description:
        "Tenemos tanques de combustible y los suministros necesarios para estos.",
      image: "/images/tanques.jpg",
    },
    {
      title: "SUMINISTRO DE PIEZAS Y TABLEROS ELÉCTRICOS",
      description:
        "Suministramos las piezas necesarias para sus tableros electronicos",
      image: "/images/tableros.jpg",
    },
    {
      title: "REPUESTOS",
      description: "Todos los repuestos para tus plantas.",
      image: "/images/repuestos.jpg",
    },
    {
      title: "CABINAS Y CUARTOS INSONORIZADOS",
      description: "Cabinas y cuartos insonorizados",
      image: "/images/cuarto.jpg",
    },
    {
      title: "TUBERÍAS DE ESCAPE",
      description: "Tuberías de escape",
      image: "/images/tuberias.jpg",
    },
    {
      title: "MÓDULOS DE CONTROL",
      description: "Módulos de control",
      image: "/images/modulo.jpg",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 9;

  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = services.slice(
    indexOfFirstService,
    indexOfLastService
  );

  const totalPages = Math.ceil(services.length / servicesPerPage);

  const scrollToTop = () => {
    // Usar setTimeout para asegurar que el DOM se haya actualizado
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      } else {
        window.scrollTo({ 
          top: 0, 
          behavior: 'smooth' 
        });
      }
    }, 0);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => {
        const newPage = prevPage - 1;
        // Usar el callback para asegurar que el estado se actualizó
        setTimeout(scrollToTop, 0);
        return newPage;
      });
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => {
        const newPage = prevPage + 1;
        // Usar el callback para asegurar que el estado se actualizó
        setTimeout(scrollToTop, 0);
        return newPage;
      });
    }
  };

  return (
    <div className={styles.container}>
      <h1 ref={titleRef} className={styles.title} id="page-top">Nuestros Servicios</h1>
      <p className={styles.description}>
        Aquí puedes encontrar información detallada sobre todos nuestros
        servicios.
      </p>

      <div className={styles.grid}>
        {currentServices.map((service, index) => (
          <div key={index} className={styles.card}>
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
          </div>
        ))}
      </div>

      <div className={styles.pagination}>
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={styles.pageButton}
        >
          Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={styles.pageButton}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
