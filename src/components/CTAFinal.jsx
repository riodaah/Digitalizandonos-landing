import ScrollReveal from './ScrollReveal'
import config from '../config.json'

const CTAFinal = () => {
  const handleClick = (e) => {
    e.preventDefault()
    const url = 'https://wa.me/56951855951?text=' + encodeURIComponent('Hola, quiero agendar la demo gratuita de 20 minutos')
    if (typeof window !== 'undefined' && window.gtag_report_conversion) {
      window.gtag_report_conversion(url)
    } else {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="contacto-final" className="py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[32px] px-8 py-16 md:py-20 text-center text-white"
               style={{ background: 'linear-gradient(135deg,#08234f 0%,#0a5cff 70%,#00c2d4 130%)' }}>
            <div className="absolute -top-52 -right-24 w-[500px] h-[500px] rounded-full bg-white/5" />
            <div className="relative">
              <h2 className="text-[30px] md:text-[42px] font-bold text-white">Mira un agente trabajando con tu propio caso</h2>
              <p className="text-white/85 text-[17px] max-w-[560px] mx-auto mt-4 mb-9">
                Agenda una demo gratuita de 20 minutos. Te mostramos un agente real cotizando, agendando
                y registrando clientes — y evaluamos juntos cuál plan le conviene a tu negocio.
              </p>
              <a href="#" onClick={handleClick}
                 className="inline-flex items-center justify-center font-semibold text-[15px] px-7 py-3.5 rounded-full bg-white text-primary-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl">
                Agendar demo gratuita
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
export default CTAFinal
