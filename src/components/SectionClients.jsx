import { FaBus, FaAppleAlt } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'

const CLIENTS = [
  { icon: <FaBus />, name: 'Buses Hualpén', sector: 'Transporte de personal' },
  { icon: <FaAppleAlt />, name: 'CFSCL', sector: 'Exportación de fruta' },
]

const SectionClients = () => (
  <section id="clientes" className="py-20 bg-bg-soft border-b border-line">
    <div className="container mx-auto px-6">
      <ScrollReveal className="text-center max-w-[640px] mx-auto">
        <span className="eyebrow">Clientes</span>
        <h2 className="text-[30px] md:text-[40px] font-bold">Empresas que ya trabajan con Darmi</h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-[720px] mx-auto">
        {CLIENTS.map((c, i) => (
          <ScrollReveal key={c.name} delay={i * 0.08}>
            <article className="h-full bg-white border border-line rounded-[22px] p-6 shadow-soft">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 shrink-0 rounded-[14px] text-white text-[20px] flex items-center justify-center"
                      style={{ background: 'linear-gradient(120deg,#0a5cff,#00c2d4)' }}>{c.icon}</span>
                <div>
                  <p className="font-display text-[22px] font-extrabold leading-tight text-ink">{c.name}</p>
                  <p className="text-[13px] font-semibold uppercase tracking-[0.08em] text-ink-soft">{c.sector}</p>
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
)
export default SectionClients
