import { useEffect, useRef } from 'react'
import { FaFilePdf, FaUserPlus, FaCalendarCheck } from 'react-icons/fa'
import config from '../config.json'

const ToolChip = ({ icon, text }) => (
  <div className="tool-chip-anim self-start flex items-center gap-2 text-[12.5px] font-semibold text-primary-ink bg-[#eef4ff] border border-[#d8e5ff] px-3 py-1.5 rounded-full">
    {icon} {text}
  </div>
)

const Hero = () => {
  const chatRef = useRef(null)

  const handleWhatsAppClick = (e) => {
    e.preventDefault()
    if (typeof window !== 'undefined' && window.gtag_report_conversion) {
      window.gtag_report_conversion(config.contact.whatsapp_url)
    } else {
      window.open(config.contact.whatsapp_url, '_blank', 'noopener,noreferrer')
    }
  }

  useEffect(() => {
    const chat = chatRef.current
    if (!chat) return
    const items = [...chat.children]
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) { items.forEach((el) => el.classList.add('show')); return }

    let timers = []
    const play = () => {
      items.forEach((el) => el.classList.remove('show'))
      items.forEach((el, i) => timers.push(setTimeout(() => el.classList.add('show'), 700 + i * 1300)))
      timers.push(setTimeout(play, 700 + items.length * 1300 + 5000))
    }
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { play(); io.disconnect() } })
    }, { threshold: 0.3 })
    io.observe(chat)
    return () => { timers.forEach(clearTimeout); io.disconnect() }
  }, [])

  return (
    <header id="hero-detalle" className="relative overflow-hidden pt-36 pb-24 md:pt-40 md:pb-28">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(700px 420px at 15% -10%, rgba(10,92,255,.07), transparent 60%), radial-gradient(600px 400px at 90% 10%, rgba(0,194,212,.07), transparent 60%)' }} />
      <div className="container mx-auto px-6 relative grid md:grid-cols-2 gap-14 items-center">
        <div>
          <span className="eyebrow">Agentes IA para tu negocio</span>
          <h1 className="text-[38px] md:text-[54px] font-extrabold leading-[1.08]">
            Tu mejor vendedor <span className="gradient-text">nunca duerme</span>
          </h1>
          <p className="text-[18px] md:text-[19px] text-ink-soft mt-5 mb-8 max-w-[520px]">
            Agentes de inteligencia artificial que atienden WhatsApp, Instagram y correo:
            cotizan, agendan citas y registran clientes en tu CRM. Automático, 24/7, con tu tono de marca.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={config.contact.whatsapp_url} onClick={handleWhatsAppClick} className="btn-primary">
              Ver una demo en vivo
            </a>
            <a href="#planes" className="btn-ghost">Ver planes</a>
          </div>
          <div className="mt-5 flex items-center gap-2 text-[13.5px] text-ink-soft">
            <span className="w-2 h-2 rounded-full bg-green-600 shadow-[0_0_0_4px_rgba(22,163,74,.15)]"></span>
            Implementación en 7–14 días · Sin permanencia
          </div>
        </div>

        {/* Demo animado del agente */}
        <div className="bg-white border border-line rounded-[28px] shadow-hero overflow-hidden max-w-[420px] w-full md:ml-auto"
             aria-label="Demostración de un agente IA respondiendo por WhatsApp">
          <div className="flex items-center gap-3 px-5 py-3.5 border-b border-line bg-[#fbfcfe]">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold font-display"
                 style={{ background: 'linear-gradient(120deg,#0a5cff,#00c2d4)' }}>D</div>
            <div>
              <div className="font-semibold text-[14.5px]">Agente Digitalizándonos</div>
              <div className="text-[12px] text-green-600">● en línea</div>
            </div>
          </div>
          <div ref={chatRef} className="p-4 md:p-5 flex flex-col gap-2.5 min-h-[340px]"
               style={{ background: 'linear-gradient(180deg,#fff,#f9fbfe)' }}>
            <div className="chat-msg self-end max-w-[82%] px-3.5 py-2.5 rounded-2xl rounded-br-md text-[14px] bg-primary text-white">
              Hola! Necesito una cotización para 500 bolsas personalizadas 🙌
            </div>
            <div className="chat-msg self-start max-w-[82%] px-3.5 py-2.5 rounded-2xl rounded-bl-md text-[14px] bg-white border border-line shadow-soft">
              ¡Hola! Con gusto 😊 ¿Las prefieres con logo a 1 color o full color?
            </div>
            <div className="chat-msg self-end max-w-[82%] px-3.5 py-2.5 rounded-2xl rounded-br-md text-[14px] bg-primary text-white">
              Full color porfa
            </div>
            <ToolChip icon={<FaFilePdf />} text="Cotización PDF generada" />
            <ToolChip icon={<FaUserPlus />} text="Cliente creado en CRM" />
            <div className="chat-msg self-start max-w-[82%] px-3.5 py-2.5 rounded-2xl rounded-bl-md text-[14px] bg-white border border-line shadow-soft">
              ¡Listo! Te envié la cotización N°2847 en PDF 📄 ¿Quieres agendar una llamada para revisarla?
            </div>
            <div className="chat-msg self-end max-w-[82%] px-3.5 py-2.5 rounded-2xl rounded-br-md text-[14px] bg-primary text-white">
              Sí, mañana en la tarde
            </div>
            <ToolChip icon={<FaCalendarCheck />} text="Cita agendada · Mañana 16:00" />
            <div className="chat-msg self-start max-w-[82%] px-3.5 py-2.5 rounded-2xl rounded-bl-md text-[14px] bg-white border border-line shadow-soft">
              Agendado para mañana a las 16:00 ✅ Te llegará la confirmación por correo.
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero
