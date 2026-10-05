import { useEffect, useRef, useState } from 'react'
import { FaWhatsapp, FaRobot, FaUsers, FaCogs, FaCheck, FaArrowRight } from 'react-icons/fa'
import config from '../config.json'
import { openWhatsApp } from '../lib/whatsapp'
import styles from './HeroFlow.module.css'

// Contornos de la "D" de Schibsted Grotesk (peso 800) en unidades de la fuente.
// Caja aprox.: x 65..721, y -703..0 → centro (393, -351).
const D_OUTER =
  'M64.94 0L64.94 -703.12L355.96 -703.12Q483.4 -703.12 563.96 -662.11Q644.53 -621.09 682.86 -542.72Q721.19 -464.36 721.19 -352.54Q721.19 -237.79 681.4 -159.18Q641.6 -80.57 560.3 -40.28Q479 0 354.49 0Z'
const D_COUNTER =
  'M241.21 -149.9L335.45 -149.9Q537.11 -149.9 537.11 -351.56Q537.11 -416.5 515.14 -461.43Q493.16 -506.35 448.97 -529.79Q404.79 -553.22 336.91 -553.22L241.21 -553.22Z'
const D_CX = 393
const D_CY = -351
const D_WIDTH = 720

// Nodo 0 = la D (lleva a Nosotros). Cada paso es un enlace a su sección.
const ORIGIN = { href: '#nosotros', label: 'Conoce a Darmi' }
const STEPS = [
  { icon: FaWhatsapp, label: 'Mensaje entrante', href: '#servicio-agentes', hint: 'Agentes de IA' },
  { icon: FaRobot, label: 'Agente IA', href: '#servicio-agentes', hint: 'Agentes de IA' },
  { icon: FaUsers, label: 'Pipedrive CRM', href: '#pipedrive', hint: 'Pipedrive' },
  { icon: FaCogs, label: 'Automatización', href: '#servicio-automatizacion', hint: 'Automatización' },
  { icon: FaCheck, label: 'Venta cerrada', href: '#contacto', hint: 'Conversemos' },
]

const LAYOUTS = {
  wide: {
    w: 1600, h: 460, r: 48, font: 23,
    d: { x: 800, y: 240, s: 0.4 },
    nodes: [
      { x: 120, y: 225 }, { x: 400, y: 120 }, { x: 670, y: 340 },
      { x: 940, y: 120 }, { x: 1210, y: 340 }, { x: 1470, y: 225 },
    ],
  },
  tall: {
    w: 900, h: 1360, r: 64, font: 34,
    d: { x: 450, y: 400, s: 0.5 },
    nodes: [
      { x: 450, y: 90 }, { x: 190, y: 310 }, { x: 710, y: 530 },
      { x: 190, y: 750 }, { x: 710, y: 970 }, { x: 450, y: 1170 },
    ],
  },
}

const segmentPath = (a, b) => {
  const dx = (b.x - a.x) * 0.55
  return `M${a.x} ${a.y}C${a.x + dx} ${a.y} ${b.x - dx} ${b.y} ${b.x} ${b.y}`
}

// Línea de tiempo en segundos: corre sola al cargar, sin depender del scroll.
const T = {
  trace: [0.1, 1.2],
  fill: [1.0, 1.5],
  shrink: [1.6, 2.3],
  graph: [2.1, 3.1],
  pulse: [3.0, 5.0],
}
const INTRO_END = T.pulse[1]
const LOOP_EVERY = 6.5 // la luz vuelve a recorrer el flujo cada tantos segundos
const LOOP_DURATION = 2.6

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v)
const range = (t, [a, b]) => clamp01((t - a) / (b - a))
const lerp = (a, b, t) => a + (b - a) * t
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2)
const easeOut = (t) => 1 - (1 - t) ** 3

const getLayoutKey = () =>
  typeof window !== 'undefined' && window.innerWidth < 768 ? 'tall' : 'wide'

const HeroFlow = () => {
  const [layoutKey, setLayoutKey] = useState(getLayoutKey)
  const L = LAYOUTS[layoutKey]
  const segs = L.nodes.slice(1).map((n, i) => segmentPath(L.nodes[i], n))
  const fullPath = segs.map((d, i) => (i === 0 ? d : d.replace(/^M[^C]+/, ''))).join('')
  const iconSize = L.r * 0.8
  const node0 = L.nodes[0]

  const sectionRef = useRef(null)
  const svgRef = useRef(null)
  const dGroupRef = useRef(null)
  const traceRef = useRef(null)
  const traceOuterRef = useRef(null)
  const traceCounterRef = useRef(null)
  const solidRef = useRef(null)
  const originRef = useRef(null)
  const segRefs = useRef([])
  const litRef = useRef(null)
  const trailRef = useRef(null)
  const cometRef = useRef(null)
  const nodeRefs = useRef([])
  const pingRefs = useRef([])

  useEffect(() => {
    const onResize = () => setLayoutKey(getLayoutKey())
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const lenOf = (el) => (el ? el.getTotalLength() : 0)
    const lenOuter = lenOf(traceOuterRef.current)
    const lenCounter = lenOf(traceCounterRef.current)
    const segLens = segRefs.current.map(lenOf)
    const total = segLens.reduce((a, b) => a + b, 0) || 1
    const arrive = [0]
    segLens.forEach((l, i) => arrive.push(arrive[i] + l))
    const trailLen = Math.min(total * 0.12, 240)
    const n = segLens.length

    if (traceOuterRef.current) traceOuterRef.current.style.strokeDasharray = `${lenOuter}`
    if (traceCounterRef.current) traceCounterRef.current.style.strokeDasharray = `${lenCounter}`
    segRefs.current.forEach((el, i) => { if (el) el.style.strokeDasharray = `${segLens[i]}` })
    if (litRef.current) litRef.current.style.strokeDasharray = `${total} ${total}`
    if (trailRef.current) trailRef.current.style.strokeDasharray = `${trailLen} ${total + trailLen}`

    const dEnd = { x: node0.x, y: node0.y, s: (L.r * 1.05) / D_WIDTH }
    const setVar = (el, name, value) => { if (el) el.style.setProperty(name, value) }

    const placeComet = (pos, opacity) => {
      if (trailRef.current) trailRef.current.style.strokeDashoffset = `${trailLen - pos}`
      setVar(trailRef.current, '--o', `${opacity}`)
      if (cometRef.current && litRef.current) {
        const pt = litRef.current.getPointAtLength(Math.min(Math.max(pos, 0), total))
        cometRef.current.setAttribute('transform', `translate(${pt.x.toFixed(2)} ${pt.y.toFixed(2)})`)
        setVar(cometRef.current, '--o', `${opacity}`)
      }
    }

    const ping = (pos) => {
      pingRefs.current.forEach((el, i) => {
        if (!el) return
        const t = clamp01((pos - arrive[i + 1] + 20) / 160)
        const on = t > 0 && t < 1
        el.setAttribute('r', `${(L.r * (1 + 0.7 * t)).toFixed(1)}`)
        el.style.opacity = on ? `${1 - t}` : '0'
      })
    }

    const renderIntro = (t) => {
      const tTrace = easeInOut(range(t, T.trace))
      const tFill = easeInOut(range(t, T.fill))
      const tShrink = easeInOut(range(t, T.shrink))
      const tGraph = range(t, T.graph)
      const tPulse = easeInOut(range(t, T.pulse))

      if (traceOuterRef.current) traceOuterRef.current.style.strokeDashoffset = `${lenOuter * (1 - tTrace)}`
      if (traceCounterRef.current) {
        const tInner = clamp01((tTrace - 0.45) / 0.55)
        traceCounterRef.current.style.strokeDashoffset = `${lenCounter * (1 - tInner)}`
      }
      setVar(traceRef.current, '--o', `${1 - tFill}`)
      setVar(solidRef.current, '--o', `${tFill}`)

      if (dGroupRef.current) {
        const x = lerp(L.d.x, dEnd.x, tShrink)
        const y = lerp(L.d.y, dEnd.y, tShrink)
        const s = lerp(L.d.s, dEnd.s, tShrink)
        dGroupRef.current.setAttribute(
          'transform',
          `translate(${x.toFixed(2)} ${y.toFixed(2)}) scale(${s.toFixed(4)}) translate(${-D_CX} ${-D_CY})`
        )
      }
      setVar(originRef.current, '--o', `${easeOut(clamp01((tShrink - 0.8) / 0.2))}`)

      segRefs.current.forEach((el, i) => {
        if (!el) return
        const k = easeInOut(clamp01(tGraph * (n + 1) - i))
        el.style.strokeDashoffset = `${segLens[i] * (1 - k)}`
      })

      const pos = tPulse * total
      if (litRef.current) litRef.current.style.strokeDashoffset = `${total - pos}`
      placeComet(pos, tPulse > 0 && tPulse < 1 ? 1 : 0)

      nodeRefs.current.forEach((el, i) => {
        if (!el) return
        const appear = easeOut(clamp01(tGraph * (n + 1) - i - 0.4))
        const lit = clamp01((pos - arrive[i + 1] + 110) / 110)
        setVar(el, '--appear', `${appear}`)
        setVar(el, '--lit', `${lit}`)
      })
      ping(pos)
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      renderIntro(INTRO_END)
      placeComet(0, 0)
      return undefined
    }

    let raf = 0
    let elapsed = 0 // segundos acumulados de animación
    let resumedAt = 0
    let running = false
    const tick = (now) => {
      if (!running) return
      if (!resumedAt) resumedAt = now
      const t = elapsed + (now - resumedAt) / 1000
      if (t <= INTRO_END) {
        renderIntro(t)
      } else {
        // Después de la intro, la luz vuelve a recorrer el flujo cada cierto tiempo.
        const lt = (t - INTRO_END) % LOOP_EVERY
        const k = lt < LOOP_DURATION ? easeInOut(lt / LOOP_DURATION) : -1
        if (k >= 0) {
          placeComet(k * total, Math.min(1, Math.min(lt, LOOP_DURATION - lt) * 3))
          ping(k * total)
        } else {
          placeComet(0, 0)
          ping(-1000)
        }
      }
      raf = requestAnimationFrame(tick)
    }

    // Parte cuando el diagrama está a la vista (en móvil, al bajar un poco)
    // y se pausa cuando sale de pantalla.
    renderIntro(0)
    const io = new IntersectionObserver(([entry]) => {
      const visible = entry.intersectionRatio >= 0.35
      if (visible && !running) {
        running = true
        resumedAt = 0
        raf = requestAnimationFrame(tick)
      } else if (!entry.isIntersecting && running) {
        running = false
        cancelAnimationFrame(raf)
        if (resumedAt) elapsed += (performance.now() - resumedAt) / 1000
        resumedAt = 0
      }
    }, { threshold: [0, 0.35] })
    if (svgRef.current) io.observe(svgRef.current)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      io.disconnect()
    }
  }, [layoutKey]) // eslint-disable-line react-hooks/exhaustive-deps

  const labelAbove = (p) => layoutKey === 'wide' && p.y < L.h / 2 - 40

  return (
    <section id="home" ref={sectionRef} className={styles.section}>
      <div className={styles.aurora} aria-hidden="true" />

      <div className="container mx-auto px-6 relative pt-28 md:pt-28 text-center">
        <span className="inline-block text-[13px] font-semibold tracking-[0.12em] uppercase text-[#7fe3ee] mb-3">
          Darmi · Agencia de automatización con IA
        </span>
        <h1 className="text-[34px] md:text-[50px] font-extrabold leading-[1.08] text-white max-w-[1000px] mx-auto">
          IA aplicada a los <span className="gradient-text">procesos</span> de tu empresa
        </h1>
        <p className="text-[17px] md:text-[18.5px] text-white/70 mt-4 max-w-[720px] mx-auto">
          Automatizamos tareas, implementamos agentes de IA y ponemos en marcha tu CRM,
          para que tu equipo dedique su tiempo a lo que de verdad importa.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-7">
          <a href={config.contact.whatsapp_url} onClick={openWhatsApp} className="btn-primary">
            <FaWhatsapp /> Conversemos
          </a>
          <a href="#servicios"
             className="inline-flex items-center justify-center gap-2 font-semibold text-[15px] px-6 py-3 rounded-full border border-white/25 text-white transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5">
            Ver servicios
          </a>
        </div>
      </div>

      <div className="relative container mx-auto px-4 md:px-6 mt-10 md:mt-8 pb-14">
        <p className={styles.caption}>
          Así fluye un proceso con Darmi <span className="text-white/45">· toca cada paso para ver más</span>
        </p>
        <svg
          key={layoutKey}
          ref={svgRef}
          className={styles.svg}
          viewBox={`0 0 ${L.w} ${L.h}`}
          role="group"
          aria-label="Proceso automatizado: mensaje entrante, agente IA, Pipedrive CRM, automatización y venta cerrada. Cada paso enlaza a su sección."
        >
          <defs>
            <linearGradient id="flowFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0a5cff" />
              <stop offset="100%" stopColor="#00c2d4" />
            </linearGradient>
            <linearGradient id="flowLine" gradientUnits="userSpaceOnUse"
              x1={node0.x} y1={node0.y} x2={L.nodes[5].x} y2={L.nodes[5].y}>
              <stop offset="0%" stopColor="#0a5cff" />
              <stop offset="100%" stopColor="#00c2d4" />
            </linearGradient>
            <radialGradient id="flowComet">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#7fe3ee" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#00c2d4" stopOpacity="0" />
            </radialGradient>
            <filter id="flowBlur" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" />
            </filter>
            <mask id="flowMask" maskUnits="userSpaceOnUse" x="-2000" y="-2000" width="4000" height="4000">
              <rect x="-2000" y="-2000" width="4000" height="4000" fill="#fff" />
              <path d={D_COUNTER} fill="#000" />
            </mask>
          </defs>

          {segs.map((d, i) => (
            <path key={d} ref={(el) => { segRefs.current[i] = el }} d={d}
                  className={styles.segment} fill="none" strokeWidth="3" />
          ))}
          <path ref={litRef} d={fullPath} fill="none" stroke="url(#flowLine)" strokeWidth="4" strokeLinecap="round" />
          <path ref={trailRef} d={fullPath} className={styles.trail} fill="none" stroke="#7fe3ee"
                strokeWidth="8" strokeLinecap="round" filter="url(#flowBlur)" />

          {STEPS.map((step, i) => {
            const p = L.nodes[i + 1]
            const Icon = step.icon
            const above = labelAbove(p)
            const labelY = above ? -(L.r + L.font * 1.9) : L.r + L.font * 1.5
            return (
              <a key={step.label} href={step.href} className={styles.nodeLink}
                 aria-label={`${step.label}: ir a ${step.hint}`}>
                <g transform={`translate(${p.x} ${p.y})`}>
                  <circle ref={(el) => { pingRefs.current[i] = el }} r={L.r} fill="none"
                          stroke="#7fe3ee" strokeWidth="3" style={{ opacity: 0 }} />
                  <g ref={(el) => { nodeRefs.current[i] = el }} className={styles.node}>
                    <g className={styles.nodeCore}>
                      <circle className={styles.hit} r={L.r * 1.5} />
                      <circle className={styles.nodeBase} r={L.r} />
                      <circle className={styles.nodeLit} r={L.r} fill="url(#flowFill)" />
                      <g transform={`translate(${-iconSize / 2} ${-iconSize / 2})`}>
                        <Icon size={iconSize} className={styles.nodeIcon} />
                      </g>
                    </g>
                    <text className={styles.nodeLabel} y={labelY} textAnchor="middle" fontSize={L.font}>
                      {step.label}
                    </text>
                    <text className={styles.nodeHint} y={labelY + L.font * 1.25} textAnchor="middle" fontSize={L.font * 0.78}>
                      {step.hint} →
                    </text>
                  </g>
                </g>
              </a>
            )
          })}

          {/* La D: se dibuja al centro y se convierte en el primer paso */}
          <a href={ORIGIN.href} className={styles.nodeLink} aria-label="Darmi: ir a Nosotros">
            <circle ref={originRef} className={styles.origin} cx={node0.x} cy={node0.y} r={L.r}
                    fill="rgba(10,92,255,0.14)" stroke="url(#flowFill)" strokeWidth="3" />
            <g ref={dGroupRef}
               transform={`translate(${L.d.x} ${L.d.y}) scale(${L.d.s}) translate(${-D_CX} ${-D_CY})`}>
              <g ref={traceRef} className={styles.trace}>
                <path ref={traceOuterRef} d={D_OUTER} fill="none" stroke="url(#flowFill)" strokeWidth="7" />
                <path ref={traceCounterRef} d={D_COUNTER} fill="none" stroke="url(#flowFill)" strokeWidth="7" />
              </g>
              <g ref={solidRef} className={styles.solid}>
                <path d={D_OUTER} fill="url(#flowFill)" mask="url(#flowMask)" />
              </g>
            </g>
          </a>

          <g ref={cometRef} className={styles.comet} pointerEvents="none">
            <circle r={L.r * 0.7} fill="url(#flowComet)" />
            <circle r={L.r * 0.16} fill="#ffffff" />
          </g>
        </svg>
      </div>
    </section>
  )
}

export default HeroFlow
