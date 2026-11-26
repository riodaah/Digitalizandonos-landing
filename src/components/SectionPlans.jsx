import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaCheck, FaTimes, FaArrowRight, FaWhatsapp, FaMinus } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'
import { PLANS, DETAIL_GROUPS } from '../data/plans'
import { openWhatsApp, whatsAppUrl } from '../lib/whatsapp'

const waText = (plan) => `Hola Darmi, me interesa el plan ${plan.name} de agentes de IA`

// Luz que sigue al cursor dentro de la tarjeta
const trackSpotlight = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
}

const Price = ({ plan, dark }) => (
  <div className="mt-6">
    {plan.pricePrefix && (
      <span className={`block text-[12px] font-semibold uppercase tracking-[0.12em] ${dark ? 'text-ink/60' : 'text-white/50'}`}>
        {plan.pricePrefix}
      </span>
    )}
    <p className="flex items-baseline gap-1">
      <span className="font-display text-[38px] md:text-[42px] font-extrabold tracking-tight leading-none">{plan.price}</span>
      <span className={`text-[15px] font-semibold ${dark ? 'text-ink/60' : 'text-white/50'}`}>{plan.priceSuffix}</span>
    </p>
    <p className={`text-[13px] mt-2 ${dark ? 'text-ink/70' : 'text-white/55'}`}>{plan.setup}</p>
  </div>
)

const PlanCard = ({ plan, onDetail }) => {
  const featured = plan.id === 'pro'
  const enterprise = plan.id === 'enterprise'
  return (
    <article
      onMouseMove={trackSpotlight}
      className={`group relative h-full flex flex-col rounded-[26px] p-7 overflow-hidden transition-all duration-300 hover:-translate-y-1.5
        ${featured
          ? 'bg-lime text-ink shadow-lime lg:-mt-4 lg:pb-11'
          : enterprise
            ? 'text-white border border-[#3550e0]/50 bg-[linear-gradient(160deg,rgba(53,80,224,.28),rgba(21,27,43,.9)_55%)]'
            : 'text-white border border-white/10 bg-white/[0.03] hover:border-white/20'}`}
    >
      {/* spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: featured
            ? 'radial-gradient(320px circle at var(--mx) var(--my), rgba(255,255,255,.45), transparent 60%)'
            : 'radial-gradient(320px circle at var(--mx) var(--my), rgba(198,244,50,.10), transparent 60%)',
        }}
      />

      <div className="relative flex items-center justify-between gap-3">
        <h3 className="text-[24px] font-extrabold">{plan.name}</h3>
        {plan.badge && (
          <span className="text-[11px] font-bold uppercase tracking-[0.12em] bg-ink text-lime px-3 py-1 rounded-full">
            {plan.badge}
          </span>
        )}
      </div>
      <p className={`relative text-[14.5px] mt-1.5 min-h-[44px] ${featured ? 'text-ink/75' : 'text-white/60'}`}>{plan.audience}</p>

      <div className="relative"><Price plan={plan} dark={featured} /></div>

      <div className={`relative h-px my-6 ${featured ? 'bg-ink/15' : 'bg-white/10'}`} />

      <ul className="relative space-y-3 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-[14.5px]">
            <span className={`mt-[3px] w-[18px] h-[18px] shrink-0 rounded-full text-[9px] flex items-center justify-center
              ${featured ? 'bg-ink text-lime' : 'bg-lime/15 text-lime'}`}>
              <FaCheck />
            </span>
            <span className={featured ? 'text-ink' : 'text-white/85'}>{f}</span>
          </li>
        ))}
      </ul>

      <div className="relative mt-8 flex flex-col gap-2.5">
        <button
          type="button"
          onClick={() => onDetail(plan.id)}
          className={`inline-flex items-center justify-center gap-2 font-semibold text-[14.5px] px-5 py-3 rounded-full transition-all duration-200
            ${featured ? 'bg-ink text-white hover:shadow-[0_10px_26px_rgba(11,15,26,.35)]' : 'bg-white text-ink hover:bg-lime'}`}
        >
          Ver detalle <FaArrowRight className="text-[12px] transition-transform group-hover:translate-x-0.5" />
        </button>
        <a
          href={whatsAppUrl(waText(plan))}
          onClick={(e) => openWhatsApp(e, `plan_${plan.id}`, waText(plan))}
          className={`inline-flex items-center justify-center gap-2 font-semibold text-[14px] px-5 py-2.5 rounded-full transition-colors
            ${featured ? 'text-ink hover:bg-ink/10' : 'text-white/75 hover:text-white hover:bg-white/5'}`}
        >
          <FaWhatsapp /> {enterprise ? 'Cotizar' : 'Lo quiero'}
        </a>
      </div>
    </article>
  )
}

const Value = ({ v, active }) => {
  if (v === true) {
    return (
      <span className={`inline-flex items-center gap-2 font-semibold ${active ? 'text-lime' : 'text-white/80'}`}>
        <span className={`w-5 h-5 rounded-full text-[9px] flex items-center justify-center ${active ? 'bg-lime text-ink' : 'bg-white/10 text-lime'}`}>
          <FaCheck />
        </span>
        Sí
      </span>
    )
  }
  if (v === false) {
    return (
      <span className="inline-flex items-center gap-2 text-white/35">
        <span className="w-5 h-5 rounded-full text-[9px] flex items-center justify-center bg-white/5"><FaMinus /></span>
        No
      </span>
    )
  }
  return <span className={active ? 'text-white' : 'text-white/75'}>{v}</span>
}

const DetailModal = ({ selected, setSelected, onClose }) => {
  const dialogRef = useRef(null)
  const idx = PLANS.findIndex((p) => p.id === selected)
  const plan = PLANS[idx]

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    dialogRef.current?.focus()
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end md:items-center justify-center md:p-6"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-[#05070d]/75 backdrop-blur-md" onClick={onClose} />

      <motion.div
        ref={dialogRef}
        role="dialog" aria-modal="true" aria-labelledby="plan-detail-title" tabIndex={-1}
        className="relative w-full max-w-[1080px] max-h-[92vh] flex flex-col bg-ink text-white rounded-t-[28px] md:rounded-[28px] border border-white/10 shadow-[0_40px_120px_rgba(0,0,0,.6)] overflow-hidden outline-none"
        initial={{ y: 40, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 30, opacity: 0, scale: 0.98 }}
        transition={{ type: 'spring', damping: 26, stiffness: 260 }}
      >
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-40 w-[380px] h-[380px] rounded-full bg-lime/20 blur-[90px]" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-40 w-[380px] h-[380px] rounded-full bg-[#3550e0]/25 blur-[90px]" />

        {/* Encabezado */}
        <div className="relative px-6 md:px-9 pt-7 pb-5 border-b border-white/10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[12px] font-semibold tracking-[0.14em] uppercase text-lime">Detalle del plan</span>
              <h3 id="plan-detail-title" className="text-[26px] md:text-[32px] font-extrabold mt-1">
                Plan {plan.name}{' '}
                <span className="text-white/45 font-bold text-[18px] md:text-[22px]">
                  {plan.pricePrefix ? `${plan.pricePrefix} ` : ''}{plan.price}{plan.priceSuffix}
                </span>
              </h3>
            </div>
            <button type="button" onClick={onClose} aria-label="Cerrar detalle"
                    className="shrink-0 w-10 h-10 rounded-full border border-white/15 text-white/80 flex items-center justify-center hover:bg-white/10 hover:text-white transition-colors">
              <FaTimes />
            </button>
          </div>

          {/* Selector de plan */}
          <div className="mt-5 inline-flex p-1 rounded-full bg-white/[0.06] border border-white/10 max-w-full overflow-x-auto">
            {PLANS.map((p) => (
              <button key={p.id} type="button" onClick={() => setSelected(p.id)}
                      className={`relative px-4 md:px-5 py-2 rounded-full text-[13.5px] font-semibold whitespace-nowrap transition-colors
                        ${p.id === selected ? 'text-ink' : 'text-white/65 hover:text-white'}`}>
                {p.id === selected && (
                  <motion.span layoutId="planPill" className="absolute inset-0 rounded-full bg-lime"
                               transition={{ type: 'spring', damping: 28, stiffness: 320 }} />
                )}
                <span className="relative">{p.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cuerpo */}
        <div className="relative overflow-y-auto px-6 md:px-9 py-6">
          {/* Escritorio: tabla comparativa con el plan elegido destacado */}
          <table className="hidden md:table w-full text-[14px] border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="w-[26%]" />
                {PLANS.map((p, i) => (
                  <th key={p.id} scope="col"
                      className={`text-left align-bottom px-4 pb-3 pt-3 rounded-t-[16px] transition-colors cursor-pointer
                        ${i === idx ? 'bg-lime/[0.08] border-x border-t border-lime/40' : 'border-x border-t border-transparent'}`}
                      onClick={() => setSelected(p.id)}>
                    <span className={`block font-display text-[17px] font-extrabold ${i === idx ? 'text-lime' : 'text-white'}`}>{p.name}</span>
                    <span className="block text-[12px] font-medium text-white/45 mt-0.5">
                      {p.pricePrefix ? `${p.pricePrefix} ` : ''}{p.price}{p.priceSuffix}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            {DETAIL_GROUPS.map((g, gi) => (
              <tbody key={g.title}>
                <tr>
                  <th colSpan={1} scope="colgroup" className="text-left pt-6 pb-2 text-[11.5px] font-semibold tracking-[0.14em] uppercase text-white/40">
                    {g.title}
                  </th>
                  {PLANS.map((p, i) => (
                    <td key={p.id} className={i === idx ? 'bg-lime/[0.08] border-x border-lime/40' : 'border-x border-transparent'} />
                  ))}
                </tr>
                {g.rows.map((r, ri) => {
                  const last = gi === DETAIL_GROUPS.length - 1 && ri === g.rows.length - 1
                  return (
                    <tr key={r.label} className="group/row">
                      <th scope="row" className="text-left font-semibold text-white/90 py-3.5 pr-4 border-t border-white/[0.07] align-top">
                        {r.label}
                      </th>
                      {r.values.map((v, i) => (
                        <td key={i}
                            className={`px-4 py-3.5 align-top border-t border-t-white/[0.07] leading-snug group-hover/row:bg-white/[0.02]
                              ${i === idx ? 'bg-lime/[0.08] border-x border-x-lime/40' : 'border-x border-x-transparent'}
                              ${last && i === idx ? 'rounded-b-[16px] border-b border-b-lime/40' : ''}`}>
                          <Value v={v} active={i === idx} />
                        </td>
                      ))}
                    </tr>
                  )
                })}
              </tbody>
            ))}
          </table>

          {/* Móvil: solo el plan elegido */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div key={selected}
                          initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}
                          transition={{ duration: 0.2 }}>
                {DETAIL_GROUPS.map((g) => (
                  <div key={g.title} className="mb-5">
                    <p className="text-[11.5px] font-semibold tracking-[0.14em] uppercase text-white/40 mb-1">{g.title}</p>
                    <dl>
                      {g.rows.map((r) => (
                        <div key={r.label} className="py-3 border-t border-white/[0.07]">
                          <dt className="text-[13px] text-white/50">{r.label}</dt>
                          <dd className="text-[15px] mt-1"><Value v={r.values[idx]} active /></dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Pie */}
        <div className="relative px-6 md:px-9 py-5 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/[0.02]">
          <p className="text-[13px] text-white/50">
            Valores en CLP + IVA · {plan.setup}
          </p>
          <a href={whatsAppUrl(waText(plan))}
             onClick={(e) => openWhatsApp(e, `plan_detalle_${plan.id}`, waText(plan))}
             className="btn-primary">
            <FaWhatsapp /> {plan.id === 'enterprise' ? 'Cotizar Enterprise' : `Quiero el plan ${plan.name}`}
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

const SectionPlans = () => {
  const [selected, setSelected] = useState(null)
  const close = useCallback(() => setSelected(null), [])

  return (
    <section id="planes" className="relative py-24 md:py-28 bg-ink text-white overflow-hidden">
      {/* Fondo */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
           style={{
             backgroundImage:
               'linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)',
             backgroundSize: '56px 56px',
             maskImage: 'radial-gradient(ellipse at 50% 30%, #000 10%, transparent 70%)',
             WebkitMaskImage: 'radial-gradient(ellipse at 50% 30%, #000 10%, transparent 70%)',
           }} />
      <div aria-hidden="true" className="absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(closest-side, rgba(53,80,224,.35), transparent)' }} />
      <div aria-hidden="true" className="absolute -bottom-40 -right-40 w-[520px] h-[520px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(closest-side, rgba(198,244,50,.14), transparent)' }} />

      <div className="relative container mx-auto px-6">
        <ScrollReveal className="text-center max-w-[720px] mx-auto">
          <span className="eyebrow !text-lime">Planes por agente</span>
          <h2 className="text-[32px] md:text-[48px] font-bold text-white">
            Un vendedor que <span className="gradient-text">nunca duerme</span>
          </h2>
          <p className="text-[17px] text-white/65 mt-4">
            Elige el plan de tu agente de IA. Conectado a tus documentos, precios y sistemas,
            responde como tu equipo y deriva a una persona cuando hace falta.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 lg:mt-16 max-w-[1240px] mx-auto items-stretch">
          {PLANS.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.08} className="h-full">
              <PlanCard plan={p} onDetail={setSelected} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="max-w-[860px] mx-auto mt-10 text-center">
          <p className="text-[14px] text-white/50">
            Valores en CLP + IVA. Todos incluyen monitor de conversaciones, modo humano y avisos de consumo.
            Si superas el límite, tu agente sigue respondiendo y el excedente se cobra aparte.
          </p>
          <button type="button" onClick={() => setSelected('pro')}
                  className="mt-5 inline-flex items-center gap-2 text-[14.5px] font-semibold text-lime hover:gap-3 transition-all">
            Comparar todos los planes <FaArrowRight className="text-[12px]" />
          </button>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {selected && (
          <DetailModal selected={selected} setSelected={setSelected} onClose={close} />
        )}
      </AnimatePresence>
    </section>
  )
}

export default SectionPlans
