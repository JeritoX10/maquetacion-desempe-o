import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'

function Home() {
  return (
    <>
      <Hero />
      <section className="features-wrap">
        <div className="features page-width">
          <FeatureCard
            icon="✧"
            title="DISEÑO ÚNICO"
            text="Piezas exclusivas con estilo urbano y minimalista"
          />
          <FeatureCard
            icon="◉"
            title="CALIDAD PREMIUM"
            text="Materiales de alta calidad para máxima durabilidad"
          />
          <FeatureCard
            icon="⚡"
            title="ENVÍO RÁPIDO"
            text="Entrega express en 24-48 horas"
          />
        </div>
      </section>
    </>
  )
}

export default Home
