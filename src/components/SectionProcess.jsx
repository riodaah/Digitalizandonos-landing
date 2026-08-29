import { useEffect, useRef, useState } from 'react'

const steps = [
  { title: 'Diagnóstico y diseño',
    text: 'Levantamos tus flujos de venta y atención, definimos el tono del agente y las skills que necesita tu negocio.' },
  { title: 'Construcción y conexión',
    text: 'Construimos el agente, lo conectamos a tus canales y sistemas (WhatsApp, CRM, calendario) y lo entrenamos con tu información.' },
  { title: 'Lanzamiento y mejora continua',
    text: 'Salimos a producción con monitoreo. Cada mes revisamos conversaciones reales y mejoramos respuestas y flujos.' },
]

const SectionProcess = () => {
  const wrapRef = useRef(null)
  const [progress, setProgress] = useState(0) // pasos "iluminados"

  useEffect(() => {
    const wrap = wrapRef.current
    if (!wrap) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) { setProgress(steps.length); return }

    const io = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          const idx = Number(e.target.dataset.idx)
          setProgress((p) => Math.max(p, idx + 1))
        }
      })
    }, { threshold: 0.5 })
    wrap.querySelectorAll('[data-idx]').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const lineHeight = `${(progress / steps.length) * 100}%`

  return (
    <section id="como" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center reveal-up in">
          <span className="eyebrow">Proceso</span>
          <h2 className="text-[30px] md:text-[44px] font-bold">De cero a agente funcionando en 2 semanas</h2>
        </div>

        <div ref={wrapRef} className="relative max-w-[820px] mx-auto mt-16 pb-2">
          {/* riel de fondo */}
          <div className="absolute top-0 bottom-0 md:left-1/2 left-[22px] w-[3px] md:-translate-x-1/2 bg-line rounded-full" />
          {/* línea que ilumina el camino */}
          <div className="timeline-line" style={{ height: lineHeight }} />

          <div className="flex flex-col gap-14">
            {steps.map((s, i) => {
              const lit = progress > i
              const left = i % 2 === 0
              return (
                <div key={s.title} data-idx={i}
                     className={`timeline-step ${lit ? 'lit' : ''} relative md:w-1/2 pl-16 md:pl-0 ${left ? 'md:pr-14 md:self-start md:text-right' : 'md:pl-14 md:self-end'}`}>
                  {/* punto en el riel */}
                  <div className={`timeline-dot absolute top-1 w-5 h-5 rounded-full border-4 border-white transition-colors duration-500 ${lit ? 'bg-primary' : 'bg-line'}
                                   left-[13px] md:left-auto ${left ? 'md:right-[-10px]' : 'md:left-[-10px]'}`} />
                  <span className={`text-[13px] font-bold tracking-wide uppercase transition-colors duration-500 ${lit ? 'text-primary' : 'text-ink-soft'}`}>
                    Paso {i + 1}
                  </span>
                  <h3 className="text-[20px] font-semibold mt-1 mb-2">{s.title}</h3>
                  <p className="text-[15px] text-ink-soft">{s.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
export default SectionProcess
