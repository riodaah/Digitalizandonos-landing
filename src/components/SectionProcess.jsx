import ScrollReveal from './ScrollReveal'

const STEPS = [
  { title: 'Diagnóstico', text: 'Entendemos tu operación y detectamos dónde la IA y la automatización generan más impacto.' },
  { title: 'Implementación', text: 'Construimos, conectamos tus sistemas y salimos a producción en semanas, no meses.' },
  { title: 'Acompañamiento', text: 'Medimos, ajustamos y mejoramos mes a mes, como el área tecnológica de tu empresa.' },
]

const SectionProcess = () => (
  <section id="como" className="py-24">
    <div className="container mx-auto px-6">
      <ScrollReveal className="text-center">
        <span className="eyebrow">Cómo trabajamos</span>
        <h2 className="text-[30px] md:text-[44px] font-bold">Simple, en tres pasos</h2>
      </ScrollReveal>
      <ol className="grid md:grid-cols-3 gap-6 mt-14 max-w-[980px] mx-auto">
        {STEPS.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.1}>
            <li className="h-full bg-white border border-line rounded-[22px] p-7">
              <span className="font-display font-extrabold text-[40px] leading-none gradient-text">0{i + 1}</span>
              <h3 className="text-[20px] font-bold mt-4">{s.title}</h3>
              <p className="text-[15px] text-ink-soft mt-2">{s.text}</p>
            </li>
          </ScrollReveal>
        ))}
      </ol>
    </div>
  </section>
)
export default SectionProcess
