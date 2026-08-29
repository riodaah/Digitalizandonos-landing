import ScrollReveal from './ScrollReveal'

const industries = [
  { e: '💈', n: 'Barberías y estética', big: true },
  { e: '🏠', n: 'Corredoras inmobiliarias', big: true },
  { e: '⚖️', n: 'Estudios de abogados', big: true },
  { e: '🍽️', n: 'Restaurantes', big: true },
  { e: '🦷', n: 'Clínicas dentales' },
  { e: '🩺', n: 'Salud y consultas', big: true },
  { e: '🏭', n: 'Ventas B2B e industria', big: true },
  { e: '💪', n: 'Gimnasios' },
  { e: '🚗', n: 'Automotoras' },
  { e: '🛒', n: 'E-commerce' },
  { e: '📚', n: 'Educación y academias' },
  { e: '🏨', n: 'Hoteles y turismo' },
  { e: '🐾', n: 'Veterinarias' },
  { e: '📋', n: 'Contadores y asesorías' },
  { e: '🛡️', n: 'Corredores de seguros' },
  { e: '🚚', n: 'Transporte y logística' },
  { e: '🏗️', n: 'Constructoras' },
  { e: '🎉', n: 'Eventos y banquetería' },
  { e: '🔧', n: 'Servicios técnicos' },
  { e: '💊', n: 'Farmacias y salud natural' },
]

const SectionIndustries = () => (
  <section id="industrias" className="py-24 overflow-hidden">
    <div className="container mx-auto px-6 text-center">
      <ScrollReveal>
        <span className="eyebrow">Industrias</span>
        <h2 className="text-[30px] md:text-[44px] font-bold">Si tu negocio conversa con clientes,<br className="hidden md:block" /> un agente puede ayudarte</h2>
        <p className="text-[17px] text-ink-soft max-w-[620px] mx-auto mt-4">
          Estas son algunas de las industrias donde un agente IA marca la diferencia desde el primer día.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <div className="mt-14 flex flex-wrap justify-center gap-3.5 max-w-[900px] mx-auto">
          {industries.map((ind, i) => (
            <span key={ind.n}
              className={`bubble inline-flex items-center gap-2.5 rounded-full border-2 border-line bg-white shadow-soft font-semibold text-ink
                ${ind.big ? 'px-6 py-3.5 text-[16px]' : 'px-5 py-2.5 text-[14.5px]'}`}
              style={{ animationDelay: `${(i % 7) * 0.55}s` }}>
              <span className={ind.big ? 'text-[22px]' : 'text-[18px]'}>{ind.e}</span>
              {ind.n}
            </span>
          ))}
        </div>
        <p className="mt-10 text-[15px] text-ink-soft">
          ¿No ves tu rubro? <a href="#contacto-final" className="text-primary font-semibold hover:underline">Conversemos</a> — diseñamos el agente a la medida de tu operación.
        </p>
      </ScrollReveal>
    </div>
  </section>
)
export default SectionIndustries
