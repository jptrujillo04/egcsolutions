import stylesHero from './HeroSection.module.css';
import { FaWhatsapp } from 'react-icons/fa'; // Importa el ícono de WhatsApp

export default function HeroSection() {
    return (
        <section className={stylesHero.hero}>
            <div className={stylesHero['hero-content']}>
                <h1>Bienvenido a EGC Solutions</h1>
                <p>
                    Mantenimiento, instalación y alquiler de plantas eléctricas, cabinas y cuartos insonorizados.
                    Servicio técnico.
                </p>
                <a 
                    href="https://wa.me/573203397813?text=Hola%20EGC%20Solutions,%20estoy%20interesado%20en%20sus%20servicios." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={stylesHero['contact-button']}
                >
                    <FaWhatsapp className={stylesHero['icon']} /> ¡Contáctanos ahora!
                </a>
            </div>
        </section>
    );
}
