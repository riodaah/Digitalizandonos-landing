import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaRobot, FaCogs, FaLayerGroup, FaPlug, FaWhatsapp, FaCheck } from 'react-icons/fa'
import ScrollReveal from '../components/ScrollReveal'
import SectionClients from '../components/SectionClients'
import LeadForm from '../components/LeadForm'
import Footer from '../components/Footer'
import config from '../config.json'
import { openWhatsApp } from '../lib/whatsapp'

const USES = [
  { icon: <FaRobot />, title: 'Agentes de IA', text: 'Atienden consultas, cotizan y agendan por WhatsApp, web o correo, las 24 horas, con la información de tu empresa.' },
  { icon: <FaCogs />, title: 'Automatización de procesos', text: 'Eliminamos digitación y tareas repetitivas: correos, planillas, reportes, aprobaciones y traspasos entre sistemas.' },
  { icon: <FaLayerGroup />, title: 'Sistemas a medida con IA', text: 'Plataformas de gestión que leen documentos, detectan oportunidades y ordenan la información por ti.' },
  { icon: <FaPlug />, title: 'CRM, ERP e integraciones', text: 'Conectamos la IA con tu CRM, ERP y bases de datos para que todo quede registrado sin esfuerzo.' },
]

const STEPS = [
  { title: 'Diagnóstico gratuito', text: 'Una sesión de 1 hora por videollamada para entender tus procesos y detectar dónde la IA genera más impacto.' },
  { title: 'Propuesta comercial', text: 'Te enviamos una propuesta concreta: qué implementar primero, plazos, inversión y resultados esperados.' },
  { title: 'Implementación', text: 'Desarrollamos, integramos y probamos la solución con tu equipo, de punta a punta.' },
  { title: 'Acompañamiento', text: 'Soporte, mejoras continuas y nuevas automatizaciones a medida que tu empresa crece.' },
]

const DIAGNOSTICO = [
  'Revisión de tus procesos comerciales y operativos',
  'Oportunidades de IA priorizadas por impacto',
  'Propuesta comercial por escrito después de la sesión',
  'Sin costo ni compromiso',
]

const FAQ = [
  { q: '¿El diagnóstico tiene costo?', a: 'No. La sesión de 1 hora es gratuita y no te obliga a contratar nada.' },
  { q: '¿Para qué empresas es?', a: 'Para empresas medianas y grandes que quieren ahorrar tiempo, vender más o tener mejor control de su operación usando IA.' },
  { q: '¿Necesito saber de tecnología?', a: 'No. Tú nos cuentas cómo funciona tu operación y nosotros proponemos cómo aplicar la IA.' },
  { q: '¿Qué pasa después de la sesión?', a: 'Te enviamos una propuesta comercial con alcance, plazos e inversión. Tú decides si avanzamos.' },
]

const scrollToForm = (e) => {
  e.preventDefault()
  document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' })
}

const IAParaEmpresas = () => {
  useEffect(() => {
    document.title = 'IA para empresas — Diagnóstico gratuito | Darmi'
    const desc = document.querySelector('meta[name="description"]')
    const prev = desc?.getAttribute('content')
    desc?.setAttribute('content', 'Implementamos inteligencia artificial en empresas: agentes de IA, automatización de procesos y sistemas a medida. Agenda un diagnóstico gratuito de 1 hora.')
    window.scrollTo(0, 0)
    return () => { if (desc && prev) desc.setAttribute('content', prev) }
  }, [])

  return (
    <div className="min-h-screen bg-white text-ink">
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5" aria-label="Darmi, ir al inicio">
            <img src="/Images/Logo oficial hd.png" alt="" className="h-9 w-auto" />
            <span className="font-display font-extrabold text-[21px] text-white">Darmi</span>
          </Link>
          <a href="#diagnostico" onClick={scrollToForm} className="btn-primary !py-2.5 !px-5 text-[14px]">
            Diagnóstico gratis
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden text-white pt-32 pb-20 md:pt-36 md:pb-24"
                 style={{ background: 'radial-gradient(1200px 500px at 70% 0%, rgba(10,92,255,.35), transparent 60%), linear-gradient(180deg,#050b17 0%,#08172e 100%)' }}>
          <div className="container mx-auto px-6 text-center max-w-[900px]">
            <span className="inline-block text-[13px] font-semibold tracking-[0.12em] uppercase text-[#7fe3ee] mb-3">
              IA para empresas
            </span>
            <h1 className="text-[34px] md:text-[52px] font-extrabold leading-[1.08] text-white">
              Inteligencia artificial aplicada a tu empresa, <span className="gradient-text">del diagnóstico a la implementación</span>
            </h1>
            <p className="text-[17px] md:text-[19px] text-white/75 mt-5 max-w-[720px] mx-auto">
              Te mostramos dónde la IA puede ahorrar horas de trabajo y acelerar tus ventas.
              Agenda una sesión de diagnóstico gratuita de 1 hora y recibe una propuesta concreta.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <a href="#diagnostico" onClick={scrollToForm} className="btn-primary">Agendar diagnóstico gratuito</a>
              <a href={config.contact.whatsapp_url} onClick={(e) => openWhatsApp(e, 'ia_para_empresas_hero')}
                 className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-6 py-3 rounded-full border border-white/25 text-white transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5">
                <FaWhatsapp /> Escribir por WhatsApp
              </a>
            </div>
            <p className="text-[13.5px] text-white/50 mt-5">Sesión de 1 hora por videollamada · Sin costo · Sin compromiso</p>
          </div>
        </section>

        <SectionClients />

        <section className="py-20">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center max-w-[680px] mx-auto">
              <span className="eyebrow">Qué hacemos</span>
              <h2 className="text-[30px] md:text-[40px] font-bold">Cómo la IA trabaja en tu empresa</h2>
              <p className="text-[17px] text-ink-soft mt-4">
                Cada empresa es distinta. Por eso partimos entendiendo tu operación y luego elegimos la solución.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-6 mt-12 max-w-[980px] mx-auto">
              {USES.map((u, i) => (
                <ScrollReveal key={u.title} delay={i * 0.06}>
                  <article className="h-full bg-white border border-line rounded-[22px] p-7 shadow-soft">
                    <span className="w-12 h-12 rounded-[14px] text-white text-[20px] flex items-center justify-center"
                          style={{ background: 'linear-gradient(120deg,#0a5cff,#00c2d4)' }}>{u.icon}</span>
                    <h3 className="text-[20px] font-bold mt-5">{u.title}</h3>
                    <p className="text-[15.5px] text-ink-soft mt-2.5">{u.text}</p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-bg-soft border-y border-line">
          <div className="container mx-auto px-6">
            <ScrollReveal className="text-center max-w-[680px] mx-auto">
              <span className="eyebrow">Cómo trabajamos</span>
              <h2 className="text-[30px] md:text-[40px] font-bold">De la primera conversación a la IA funcionando</h2>
            </ScrollReveal>
            <ol className="grid md:grid-cols-4 gap-6 mt-12 max-w-[1100px] mx-auto">
              {STEPS.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 0.06}>
                  <li className="h-full bg-white border border-line rounded-[22px] p-6 shadow-soft list-none">
                    <span className="font-display text-[15px] font-extrabold text-primary">Paso {i + 1}</span>
                    <h3 className="text-[19px] font-bold mt-2">{s.title}</h3>
                    <p className="text-[15px] text-ink-soft mt-2">{s.text}</p>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </section>

        <section id="diagnostico" className="py-20 scroll-mt-6">
          <div className="container mx-auto px-6 grid lg:grid-cols-[1fr_1.2fr] gap-12 max-w-[1100px] items-start">
            <ScrollReveal>
              <span className="eyebrow">Diagnóstico gratuito</span>
              <h2 className="text-[30px] md:text-[38px] font-bold">Agenda tu sesión de 1 hora</h2>
              <p className="text-[16.5px] text-ink-soft mt-4">
                Cuéntanos qué te gustaría mejorar. Te contactamos para coordinar la videollamada.
              </p>
              <ul className="mt-6 space-y-3">
                {DIAGNOSTICO.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-[15.5px]">
                    <FaCheck className="text-primary mt-1 shrink-0" /> {d}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="relative bg-white border border-line rounded-[24px] p-6 md:p-8 shadow-card">
                <LeadForm location="ia_para_empresas" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="pb-24">
          <div className="container mx-auto px-6 max-w-[820px]">
            <h2 className="text-[28px] md:text-[34px] font-bold text-center">Preguntas frecuentes</h2>
            <div className="mt-8 divide-y divide-line border-y border-line">
              {FAQ.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="cursor-pointer list-none flex justify-between items-center gap-4 font-semibold text-[17px]">
                    {f.q}<span className="text-primary text-[22px] group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="text-[15.5px] text-ink-soft mt-3">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default IAParaEmpresas
