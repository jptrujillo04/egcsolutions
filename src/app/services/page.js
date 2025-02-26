"use client";

import { useState } from "react";
import styles from "./services.module.css";

export default function ServicesPage() {
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

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Nuestros Servicios</h1>
      <p className={styles.description}>
        Aquí puedes encontrar información detallada sobre todos nuestros
        servicios.
      </p>

      <div className={styles.grid}>
        {currentServices.map((service, index) => (
          <div key={index} className={styles.card}>
            <img
              src={service.image}
              alt={service.title}
              className={styles.image}
            />
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
