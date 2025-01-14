import stylesHero from './HeroSection.module.css';

export default function HeroSection() {
    return (
        <section className={stylesHero.hero}>
            <div className={stylesHero['hero-content']}>
                <h1>Bienvenido a EGC Solutions</h1>
                <p>Mantenimiento, instalación y alquiler de plantas eléctricas, cabinas y cuartos insonorizados. Servicio técnico.</p>
                <button>¡Contáctanos ahora!</button>
            </div>
        </section>
    );
}
