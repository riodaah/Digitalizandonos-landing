import { useEffect, useRef } from 'react'
import ScrollReveal from './ScrollReveal'
import { FaEnvelopeOpenText, FaUserCheck, FaBalanceScale, FaBell } from 'react-icons/fa'

const feed = [
  { icon: <FaEnvelopeOpenText />, color: '#0a5cff', time: '08:02', title: 'Correo de proveedor leído',
    detail: 'Orden de compra #4412 extraída y registrada en el ERP' },
  { icon: <FaUserCheck />, color: '#16a34a', time: '09:15', title: 'Cliente nuevo registrado',
    detail: 'Datos del formulario web ingresados al CRM sin digitación' },
  { icon: <FaBalanceScale />, color: '#7c3aed', time: '13:40', title: 'Cuadratura revisada',
    detail: 'Diferencia de $42.300 detectada y corregida entre sistemas' },
  { icon: <FaBell />, color: '#ea580c', time: '17:05', title: 'Alerta temprana al equipo',
    detail: 'Stock crítico proyectado para el lunes — aviso enviado hoy' },
]

const SectionInternalAgents = () => {
  const feedRef = useRef(null)

  useEffect(() => {
    const el = feedRef.current
    if (!el) return
    const items = [...el.children]
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) { items.forEach((it) => it.classList.add('show')); return }
    let timers = []
    const play = () => {
      items.forEach((it) => it.classList.remove('show'))
      items.forEach((it, i) => timers.push(setTimeout(() => it.classList.add('show'), 400 + i * 900)))
      timers.push(setTimeout(play, 400 + items.length * 900 + 6000))
    }
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { play(); io.disconnect() } })
    }, { threshold: 0.35 })
    io.observe(el)
    return () => { timers.forEach(clearTimeout); io.disconnect() }
  }, [])

  return (
    <section id="procesos" className="py-24 bg-bg-soft overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        <ScrollReveal>
          <span className="eyebrow">Agentes de procesos</span>
          <h2 className="text-[30px] md:text-[42px] font-bold">
            No todos los agentes conversan.<br />
            <span className="gradient-text">Algunos trabajan en silencio.</span>
          </h2>
          <p className="text-[17px] text-ink-soft mt-5 max-w-[480px]">
            Agentes que operan dentro de tus procesos, no frente a tus clientes:
          </p>
          <ul className="mt-6 space-y-3.5 text-[15.5px]">
            {[
              'Leen tus correos automáticamente y actúan según su contenido',
              'Registran clientes y pedidos en tus sistemas sin digitación',
              'Revisan y corrigen procesos de cuadratura entre plataformas',
              'Alertan a tu equipo antes de que los problemas ocurran',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="mt-[7px] w-2 h-2 shrink-0 rounded-full bg-primary" />
                <span className="text-ink">{t}</span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        {/* Feed de operaciones en vivo */}
        <ScrollReveal delay={0.15}>
          <div className="bg-white border border-line rounded-[24px] shadow-hero p-6 max-w-[440px] md:ml-auto">
            <div className="flex items-center justify-between pb-4 border-b border-line">
              <span className="font-display font-bold text-[15px]">Actividad del agente · hoy</span>
              <span className="text-[12px] text-green-600 font-semibold">● operando</span>
            </div>
            <div ref={feedRef} className="pt-4 flex flex-col gap-4">
              {feed.map((f) => (
                <div key={f.title} className="ops-item flex items-start gap-3.5">
                  <div className="w-10 h-10 shrink-0 rounded-[12px] flex items-center justify-center text-white text-[16px]"
                       style={{ background: f.color }}>
                    {f.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="font-semibold text-[14.5px]">{f.title}</span>
                      <span className="text-[12px] text-ink-soft shrink-0">{f.time}</span>
                    </div>
                    <p className="text-[13.5px] text-ink-soft">{f.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
export default SectionInternalAgents
