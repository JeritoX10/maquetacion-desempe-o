import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'

function Home() {
  return (
    <>
      <Hero />
      <section className="features">
        <FeatureCard title="DISEÑO ÚNICO" text="Estética minimalista" />
        <FeatureCard title="CALIDAD PREMIUM" text="Alta durabilidad" />
        <FeatureCard title="ENVÍO RÁPIDO" text="24-48 horas" />
      </section>
    </>
  )
}

export default Home
