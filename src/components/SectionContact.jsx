import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'
import config from '../config.json'
import { openWhatsApp } from '../lib/whatsapp'

const SectionContact = () => (
  <section id="contacto" className="pb-24">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[32px] px-8 py-16 md:py-20 text-center text-white"
             style={{ background: '#0b0f1a' }}>
          <div className="absolute -top-40 -right-32 w-[420px] h-[420px] rounded-full bg-lime opacity-90" style={{ filter: 'blur(2px)' }} />
          <div className="absolute -top-64 -right-56 w-[680px] h-[680px] rounded-full border border-white/10" />
          <div className="absolute -top-80 -right-72 w-[900px] h-[900px] rounded-full border border-white/[0.06]" />
          <div className="absolute -bottom-40 -left-20 w-[420px] h-[420px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(53,80,224,.35), transparent 65%)' }} />
          <div className="relative">
            <span className="inline-block text-[13px] font-semibold tracking-[0.12em] uppercase text-lime mb-3">Contacto</span>
            <h2 className="text-[30px] md:text-[42px] font-bold text-white">Conversemos sobre tu proyecto</h2>
            <p className="text-white/85 text-[17px] max-w-[520px] mx-auto mt-4 mb-9">
              Cuéntanos qué proceso quieres mejorar y te respondemos a la brevedad.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={config.contact.whatsapp_url} onClick={(e) => openWhatsApp(e, 'contacto')}
                 className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-7 py-3.5 rounded-full bg-lime text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl">
                <FaWhatsapp /> {config.contact.phone}
              </a>
              <a href={`mailto:${config.contact.email}`}
                 className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-7 py-3.5 rounded-full border border-white/40 text-white transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5">
                <FaEnvelope /> {config.contact.email}
              </a>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
)
export default SectionContact
