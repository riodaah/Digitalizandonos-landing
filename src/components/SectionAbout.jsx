import ScrollReveal from './ScrollReveal'
import { FaInstagram, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import config from '../config.json'

const SectionAbout = () => (
  <section id="nosotros" className="py-24">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
      <ScrollReveal>
        <div className="relative">
          <div className="absolute -inset-3 rounded-[30px] rotate-[-1.5deg]"
               style={{ background: 'linear-gradient(120deg,rgba(10,92,255,.10),rgba(0,194,212,.10))' }} />
          <img src="/Images/equipo.png" alt="Equipo Digitalizándonos"
               className="relative rounded-[24px] w-full object-cover border border-line shadow-card" />
        </div>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <span className="eyebrow">Quiénes somos</span>
        <h2 className="text-[30px] md:text-[40px] font-bold">Un equipo chileno obsesionado con que la IA trabaje para ti</h2>
        <p className="text-[16.5px] text-ink-soft mt-5">
          Somos Digitalizándonos, una agencia tecnológica de Santiago. Ayudamos a pymes y empresas
          de Chile y LATAM a crecer con agentes de inteligencia artificial que atienden clientes y
          automatizan procesos — construidos a la medida de cada negocio, no plantillas genéricas.
        </p>
        <p className="text-[16.5px] text-ink-soft mt-4">
          Acompañamos cada proyecto de principio a fin: diseñamos, construimos, lanzamos y mejoramos
          tu agente mes a mes, como un socio tecnológico de tu empresa.
        </p>
        <div className="mt-7 space-y-3 text-[15px]">
          <a href={`mailto:${config.contact.email}`} className="flex items-center gap-3 text-ink hover:text-primary transition-colors">
            <span className="w-9 h-9 rounded-[11px] bg-[#eef4ff] text-primary flex items-center justify-center"><FaEnvelope /></span>
            {config.contact.email}
          </a>
          <a href={config.contact.whatsapp_url} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-3 text-ink hover:text-primary transition-colors">
            <span className="w-9 h-9 rounded-[11px] bg-[#eef4ff] text-primary flex items-center justify-center"><FaWhatsapp /></span>
            {config.contact.phone}
          </a>
          <div className="flex items-center gap-3 text-ink">
            <span className="w-9 h-9 rounded-[11px] bg-[#eef4ff] text-primary flex items-center justify-center"><FaMapMarkerAlt /></span>
            {config.contact.address}, Santiago
          </div>
          <a href={config.socials.instagram} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-3 text-ink hover:text-primary transition-colors">
            <span className="w-9 h-9 rounded-[11px] bg-[#eef4ff] text-primary flex items-center justify-center"><FaInstagram /></span>
            Síguenos en Instagram — @digitalizandonos.cl
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
)
export default SectionAbout
