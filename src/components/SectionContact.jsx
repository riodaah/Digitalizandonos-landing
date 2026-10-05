import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'
import config from '../config.json'
import { openWhatsApp } from '../lib/whatsapp'

const SectionContact = () => (
  <section id="contacto" className="pb-24">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[32px] px-8 py-16 md:py-20 text-center text-white"
             style={{ background: 'linear-gradient(135deg,#08234f 0%,#0a5cff 70%,#00c2d4 130%)' }}>
          <div className="absolute -top-52 -right-24 w-[500px] h-[500px] rounded-full bg-white/5" />
          <div className="relative">
            <span className="inline-block text-[13px] font-semibold tracking-[0.12em] uppercase text-white/70 mb-3">Contacto</span>
            <h2 className="text-[30px] md:text-[42px] font-bold text-white">Conversemos sobre tu proyecto</h2>
            <p className="text-white/85 text-[17px] max-w-[520px] mx-auto mt-4 mb-9">
              Cuéntanos qué proceso quieres mejorar y te respondemos a la brevedad.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={config.contact.whatsapp_url} onClick={openWhatsApp}
                 className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-7 py-3.5 rounded-full bg-white text-primary-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl">
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
