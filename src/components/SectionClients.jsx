import { FaBus, FaAppleAlt } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'

const CLIENTS = [
  {
    icon: <FaBus />,
    name: 'Buses Hualpén',
    sector: 'Transporte de personal',
    title: 'Oportunidades comerciales que llegan solas al CRM',
    text: 'Un flujo con IA lee los correos de cotizaciones y licitaciones, identifica cada oportunidad y la registra en el CRM con el correo adjunto, sin digitación manual.',
    tags: ['Automatización con IA', 'CRM', 'Correo'],
  },
  {
    icon: <FaAppleAlt />,
    name: 'CFSCL',
    sector: 'Exportación de fruta',
    title: 'Un sistema a medida para toda la operación',
    text: 'Desarrollamos su sistema de gestión de productores, procesos y clientes, un agente de IA que cotiza por WhatsApp y su nuevo sitio web.',
    tags: ['Desarrollo a medida', 'Agente de IA', 'Sitio web'],
  },
]

const SectionClients = () => (
  <section id="clientes" className="py-20 bg-bg-soft border-b border-line">
    <div className="container mx-auto px-6">
      <ScrollReveal className="text-center max-w-[640px] mx-auto">
        <span className="eyebrow">Clientes</span>
        <h2 className="text-[30px] md:text-[40px] font-bold">Empresas que ya trabajan con Darmi</h2>
        <p className="text-[17px] text-ink-soft mt-4">
          Proyectos reales, en operación, en empresas chilenas.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-[980px] mx-auto">
        {CLIENTS.map((c, i) => (
          <ScrollReveal key={c.name} delay={i * 0.08}>
            <article className="h-full bg-white border border-line rounded-[22px] p-7 shadow-soft">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 shrink-0 rounded-[14px] text-white text-[20px] flex items-center justify-center"
                      style={{ background: 'linear-gradient(120deg,#0a5cff,#00c2d4)' }}>{c.icon}</span>
                <div>
                  <p className="font-display text-[22px] font-extrabold leading-tight text-ink">{c.name}</p>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-soft">{c.sector}</p>
                </div>
              </div>
              <h3 className="text-[18.5px] font-bold mt-6">{c.title}</h3>
              <p className="text-[15.5px] text-ink-soft mt-2.5">{c.text}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {c.tags.map((t) => (
                  <span key={t} className="text-[12.5px] font-semibold text-primary-ink bg-[#eef4ff] border border-[#d8e5ff] px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
)
export default SectionClients
