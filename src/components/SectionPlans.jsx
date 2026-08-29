import ScrollReveal from './ScrollReveal'
import { FaCheck } from 'react-icons/fa'
import config from '../config.json'

const wa = (msg) => `https://wa.me/56951855951?text=${encodeURIComponent(msg)}`

const plans = [
  {
    name: 'Agente Esencial',
    audience: 'Para barberías, consultas, restaurantes y servicios locales',
    price: '$150.000',
    priceNote: '/mes + IVA',
    setup: 'Implementación única: $190.000',
    cta: 'Empezar con Esencial',
    ctaStyle: 'btn-ghost',
    msg: 'Hola, me interesa el plan Agente Esencial',
    features: [
      '1 canal (WhatsApp o Instagram)',
      '1 skill a elección (agenda, catálogo PDF o cotizador)',
      'Hasta 300 conversaciones al mes',
      'Entrenado con la información de tu negocio',
      'Comprende mensajes de voz',
      'Soporte por WhatsApp',
    ],
  },
  {
    name: 'Agente Pro',
    audience: 'Para pymes que venden y agendan todos los días',
    price: '$350.000',
    priceNote: '/mes + IVA',
    setup: 'Implementación única: $290.000',
    featured: true,
    cta: 'Quiero el Plan Pro',
    ctaStyle: 'btn-primary',
    msg: 'Hola, me interesa el plan Agente Pro',
    features: [
      '2 canales (WhatsApp + Instagram o correo)',
      'Hasta 3 skills (cotizador PDF, agenda, registro de clientes)',
      'Hasta 1.000 conversaciones al mes',
      'Integración con tu ERP o CRM',
      'Modo humano ⇄ agente: intervén y responde tú cuando quieras',
      'Confirmaciones y recordatorios por correo',
      'Mejora continua mensual',
    ],
  },
  {
    name: 'Agente Enterprise',
    audience: 'Para empresas con equipos, sistemas propios y alto volumen',
    price: 'Desde $600.000',
    priceNote: '/mes + IVA',
    setup: 'Implementación según proyecto',
    cta: 'Conversar mi proyecto',
    ctaStyle: 'btn-ghost',
    msg: 'Hola, me interesa el plan Agente Enterprise',
    features: [
      'Multicanal: WhatsApp + Instagram + correo',
      'Skills ilimitadas y flujos a medida',
      'Volumen de conversaciones a medida',
      'Integración con ERP, APIs y bases de datos',
      'Modo humano ⇄ agente para todo tu equipo',
      'Desplegamos el agente en tu propia infraestructura si lo prefieres',
      'Responde consultando tus documentos y datos internos',
      'Ejecutivo de cuenta dedicado',
    ],
  },
]

const SectionPlans = () => {
  const handleClick = (e, url) => {
    e.preventDefault()
    if (typeof window !== 'undefined' && window.gtag_report_conversion) {
      window.gtag_report_conversion(url)
    } else {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="planes" className="py-24">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <span className="eyebrow">Planes</span>
          <h2 className="text-[30px] md:text-[44px] font-bold">Un plan para cada etapa de tu negocio</h2>
          <p className="text-[17px] text-ink-soft max-w-[640px] mx-auto mt-4">
            Todos incluyen implementación guiada, entrenamiento con tu información y soporte directo.
            Sin contratos de permanencia.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-6 mt-16 items-stretch max-w-[460px] lg:max-w-none mx-auto">
          {plans.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.1} className="h-full">
              <div className={`relative h-full flex flex-col text-left bg-white rounded-[24px] p-8 transition-all duration-200 hover:-translate-y-1.5
                ${p.featured ? 'border-2 border-primary shadow-hero' : 'border border-line shadow-soft hover:shadow-card'}`}>
                {p.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[12px] font-bold tracking-wide text-white px-4 py-1.5 rounded-full"
                        style={{ background: 'linear-gradient(120deg,#0a5cff,#00c2d4)' }}>
                    MÁS ELEGIDO
                  </span>
                )}
                <h3 className="text-[20px] font-bold">{p.name}</h3>
                <p className="text-[13.5px] text-ink-soft mt-1.5 mb-5">{p.audience}</p>
                <div className="font-display font-extrabold text-[36px] leading-none">
                  {p.price}<span className="text-[15px] font-medium text-ink-soft"> {p.priceNote}</span>
                </div>
                <div className="text-[13px] text-ink-soft mt-1.5">{p.setup}</div>
                <ul className="mt-6 mb-7 flex-1 space-y-2.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14.5px]">
                      <span className="mt-[3px] w-[18px] h-[18px] shrink-0 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-[9px]">
                        <FaCheck />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={wa(p.msg)} onClick={(e) => handleClick(e, wa(p.msg))}
                   className={`${p.ctaStyle} w-full text-center`}>
                  {p.cta}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-8 text-[13.5px] text-ink-soft">
          ¿Superas el límite de conversaciones? Tu agente no se apaga: te avisamos y ajustamos el plan juntos.
        </p>
      </div>
    </section>
  )
}
export default SectionPlans
