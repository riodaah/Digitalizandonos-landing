import ScrollReveal from './ScrollReveal'
import { FaTimes, FaCheck } from 'react-icons/fa'

const faqs = [
  { q: '¿En qué se diferencia de un chatbot común?',
    a: 'Un chatbot responde con menús y frases predefinidas. Un agente IA entiende lenguaje natural (incluso audios), conversa con el tono de tu marca y ejecuta acciones reales: genera cotizaciones en PDF, agenda en tu calendario y registra clientes en tu CRM.' },
  { q: '¿Cuánto demora la implementación?',
    a: 'Entre 7 y 14 días según el plan. Trabajamos contigo el tono, la información del negocio y los flujos antes de salir a producción.' },
  { q: '¿Qué pasa si el agente no sabe responder algo?',
    a: 'Deriva la conversación a tu equipo con todo el contexto y te avisa de inmediato. Además, con el modo humano ⇄ agente puedes intervenir y responder tú directamente cuando quieras.' },
  { q: '¿Necesito tener WhatsApp Business API?',
    a: 'No te preocupes por lo técnico: nosotros gestionamos la habilitación de WhatsApp Business API, Instagram y las conexiones de correo como parte de la implementación.' },
  { q: '¿Qué pasa con mis datos?',
    a: 'Son tuyos y se mantienen confidenciales. Jamás entrenamos modelos de IA con tu información ni la de tus clientes; se usa únicamente para que tu agente opere.' },
  { q: '¿Hay contrato de permanencia?',
    a: 'No. Los planes son mensuales y puedes cancelar cuando quieras. Confiamos en que los resultados hablen por sí solos.' },
]

const compare = [
  { label: 'Entiende lenguaje natural y audios', bot: false, agent: true },
  { label: 'Genera cotizaciones en PDF', bot: false, agent: true },
  { label: 'Agenda en tu calendario real', bot: false, agent: true },
  { label: 'Registra clientes en CRM / ERP', bot: false, agent: true },
  { label: 'Responde con tus documentos', bot: false, agent: true },
  { label: 'Menús con opciones 1, 2 y 3', bot: true, agent: false },
]

const SectionFAQ = () => (
  <section id="faq" className="py-24 bg-bg-soft">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-16 items-start">
        {/* FAQ a la izquierda, compacto */}
        <ScrollReveal>
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="text-[28px] md:text-[36px] font-bold">Lo que todos preguntan<br />antes de partir</h2>
          <div className="mt-8 space-y-2.5">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white border border-line rounded-[14px] px-5 py-4 shadow-soft">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-[14.5px]">
                  {f.q}
                  <span className="text-primary text-[20px] font-normal transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-[13.5px] text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </ScrollReveal>

        {/* Infografía comparativa a la derecha */}
        <ScrollReveal delay={0.15}>
          <div className="lg:sticky lg:top-28">
            <div className="bg-white border border-line rounded-[26px] shadow-hero overflow-hidden">
              <div className="px-7 py-6 border-b border-line text-center"
                   style={{ background: 'linear-gradient(120deg,#f2f7ff,#effcfd)' }}>
                <h3 className="font-display font-bold text-[20px]">Chatbot común vs Agente IA</h3>
                <p className="text-[13.5px] text-ink-soft mt-1">La diferencia que tus clientes notan en el primer mensaje</p>
              </div>
              <div className="px-7 py-5">
                <div className="grid grid-cols-[1fr_64px_64px] items-center text-[12px] font-bold text-ink-soft uppercase tracking-wide pb-3 border-b border-line">
                  <span></span>
                  <span className="text-center">Chatbot</span>
                  <span className="text-center text-primary">Agente IA</span>
                </div>
                {compare.map((c) => (
                  <div key={c.label} className="grid grid-cols-[1fr_64px_64px] items-center py-3 border-b border-line/60 last:border-0">
                    <span className="text-[14px] font-medium pr-2">{c.label}</span>
                    <span className="flex justify-center">
                      {c.bot
                        ? <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-[10px]"><FaCheck /></span>
                        : <span className="w-6 h-6 rounded-full bg-red-50 text-red-400 flex items-center justify-center text-[10px]"><FaTimes /></span>}
                    </span>
                    <span className="flex justify-center">
                      {c.agent
                        ? <span className="w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-[10px]"><FaCheck /></span>
                        : <span className="w-6 h-6 rounded-full bg-red-50 text-red-400 flex items-center justify-center text-[10px]"><FaTimes /></span>}
                    </span>
                  </div>
                ))}
                <div className="mt-5 rounded-[14px] bg-[#eef4ff] border border-[#d8e5ff] px-5 py-4 text-center">
                  <span className="text-[14px] font-semibold text-primary-ink">
                    Un agente no atiende: resuelve. Esa es la diferencia.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
)
export default SectionFAQ
