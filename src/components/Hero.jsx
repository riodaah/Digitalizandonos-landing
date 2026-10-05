import { useEffect, useRef } from 'react'
import { FaWhatsapp, FaRobot, FaUserPlus, FaFileInvoice, FaBell } from 'react-icons/fa'
import config from '../config.json'
import { openWhatsApp } from '../lib/whatsapp'

// Flujo de ejemplo: muestra en un vistazo cómo se combinan IA, automatización y CRM.
const FLOW = [
  { icon: <FaWhatsapp />, title: 'Llega un mensaje por WhatsApp', meta: 'Cliente pide una cotización' },
  { icon: <FaRobot />, title: 'Agente IA responde y califica', meta: 'Con la información de tu negocio' },
  { icon: <FaUserPlus />, title: 'Negocio creado en el CRM', meta: 'Pipedrive · etapa “Cotizado”' },
  { icon: <FaFileInvoice />, title: 'Cotización enviada en PDF', meta: 'Generada automáticamente' },
  { icon: <FaBell />, title: 'Tu equipo recibe el aviso', meta: 'Seguimiento agendado' },
]

const Hero = () => {
  const flowRef = useRef(null)

  useEffect(() => {
    const flow = flowRef.current
    if (!flow) return
    const items = [...flow.children]
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) { items.forEach((el) => el.classList.add('show')); return }

    const timers = []
    const play = () => {
      items.forEach((el) => el.classList.remove('show'))
      items.forEach((el, i) => timers.push(setTimeout(() => el.classList.add('show'), 500 + i * 900)))
      timers.push(setTimeout(play, 500 + items.length * 900 + 4500))
    }
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { play(); io.disconnect() } })
    }, { threshold: 0.3 })
    io.observe(flow)
    return () => { timers.forEach(clearTimeout); io.disconnect() }
  }, [])

  return (
    <header id="inicio" className="relative overflow-hidden pt-36 pb-24 md:pt-40 md:pb-28">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(700px 420px at 15% -10%, rgba(10,92,255,.07), transparent 60%), radial-gradient(600px 400px at 90% 10%, rgba(0,194,212,.07), transparent 60%)' }} />
      <div className="container mx-auto px-6 relative grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="eyebrow">Darmi · Agencia de automatización con IA</span>
          <h1 className="text-[38px] md:text-[54px] font-extrabold leading-[1.08]">
            IA aplicada a los <span className="gradient-text">procesos</span> de tu empresa
          </h1>
          <p className="text-[18px] md:text-[19px] text-ink-soft mt-5 mb-8 max-w-[520px]">
            Automatizamos tareas, implementamos agentes de IA y ponemos en marcha tu CRM,
            para que tu equipo dedique su tiempo a lo que de verdad importa.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={config.contact.whatsapp_url} onClick={openWhatsApp} className="btn-primary">
              <FaWhatsapp /> Conversemos
            </a>
            <a href="#servicios" className="btn-ghost">Ver servicios</a>
          </div>
        </div>

        <div className="bg-white border border-line rounded-[28px] shadow-hero overflow-hidden max-w-[420px] w-full md:ml-auto"
             role="img" aria-label="Ejemplo de un proceso automatizado: mensaje por WhatsApp, respuesta de un agente IA, registro en CRM y cotización enviada">
          <div className="flex items-center gap-3 px-5 py-3.5 border-b border-line bg-[#fbfcfe]">
            <img src="/Images/Logo oficial hd.png" alt="" className="w-9 h-9" />
            <div>
              <div className="font-semibold text-[14.5px]">Proceso automatizado</div>
              <div className="text-[12px] text-green-600">● funcionando 24/7</div>
            </div>
          </div>
          <ol ref={flowRef} className="p-5 flex flex-col gap-3 min-h-[340px]"
              style={{ background: 'linear-gradient(180deg,#fff,#f9fbfe)' }}>
            {FLOW.map((step) => (
              <li key={step.title} className="chat-msg flex items-center gap-3.5 bg-white border border-line rounded-2xl px-4 py-3 shadow-soft">
                <span className="w-9 h-9 shrink-0 rounded-[11px] bg-[#eef4ff] text-primary flex items-center justify-center">{step.icon}</span>
                <span>
                  <span className="block font-semibold text-[14px] text-ink">{step.title}</span>
                  <span className="block text-[12.5px] text-ink-soft">{step.meta}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </header>
  )
}

export default Hero
