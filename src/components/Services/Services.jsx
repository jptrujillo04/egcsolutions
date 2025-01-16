import styles from "./Services.module.css";

export default function Services() {
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
      image: "/images/control.jpeg",
    },
    {
      title: "RADIADORES",
      description: "Flushing, limpieza, empaquetadura, pintura",
      image: "/images/radiador.jpeg",
    },
    {
      title: "ALQUILER",
      description: "Alquiler de plantas eléctricas y bancos resistivos",
      image: "/images/planta.jpeg",
    },
    {
      title: "TANQUES Y SUMINISTRO DE COMBUSTIBLE",
      description:
        "Tenemos tanques de combustible y los suministros necesarios para estos.",
      image: "/images/tanques.jpeg",
    },
  ];

  return (
    <section className={styles.services}>
      <h2 className={styles.title}>Portafolio de Servicios</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
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
    </section>
  );
}
