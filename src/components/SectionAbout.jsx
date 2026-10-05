import ScrollReveal from './ScrollReveal'

const SectionAbout = () => (
  <section id="nosotros" className="py-24">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
      <ScrollReveal>
        <div className="relative">
          <div className="absolute -inset-3 rounded-[30px] rotate-[-1.5deg]"
               style={{ background: 'linear-gradient(120deg,rgba(10,92,255,.10),rgba(0,194,212,.10))' }} />
          <img src="/Images/equipo.png" alt="Equipo de Darmi" loading="lazy"
               className="relative rounded-[24px] w-full object-cover border border-line shadow-card" />
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <span className="eyebrow">Nosotros</span>
        <h2 className="text-[30px] md:text-[40px] font-bold">Somos Darmi</h2>
        <p className="text-[16.5px] text-ink-soft mt-5">
          Una agencia chilena de automatización con IA y especialistas en Pipedrive. Ayudamos a
          pymes y empresas de Chile y LATAM a trabajar mejor conectando inteligencia artificial,
          automatización y CRM a sus procesos reales, de punta a punta: diagnóstico,
          implementación, integración y soporte.
        </p>
        <p className="text-[16.5px] text-ink-soft mt-4">
          Antes nos conocías como <strong className="text-ink">Digitalizándonos</strong>. Mismo equipo,
          con un foco más claro: que la tecnología trabaje para tu empresa.
        </p>
      </ScrollReveal>
    </div>
  </section>
)
export default SectionAbout
