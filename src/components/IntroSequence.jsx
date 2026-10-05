import { useEffect, useRef, useState } from 'react'
import { FaWhatsapp, FaRobot, FaUsers, FaCogs, FaCheck } from 'react-icons/fa'
import { introStageOf } from './introStages'
import styles from './IntroSequence.module.css'

// Contornos de la "D" de Schibsted Grotesk (peso 800) en unidades de la fuente.
// Caja aprox.: x 65..721, y -703..0 → centro (393, -351).
const D_OUTER =
  'M64.94 0L64.94 -703.12L355.96 -703.12Q483.4 -703.12 563.96 -662.11Q644.53 -621.09 682.86 -542.72Q721.19 -464.36 721.19 -352.54Q721.19 -237.79 681.4 -159.18Q641.6 -80.57 560.3 -40.28Q479 0 354.49 0Z'
const D_COUNTER =
  'M241.21 -149.9L335.45 -149.9Q537.11 -149.9 537.11 -351.56Q537.11 -416.5 515.14 -461.43Q493.16 -506.35 448.97 -529.79Q404.79 -553.22 336.91 -553.22L241.21 -553.22Z'
const D_CX = 393
const D_CY = -351
const D_WIDTH = 720

// Pasos del proceso que recorre la luz (el nodo 0 es la propia D).
const STEPS = [
  { icon: FaWhatsapp, label: 'Mensaje entrante' },
  { icon: FaRobot, label: 'Agente IA' },
  { icon: FaUsers, label: 'Pipedrive CRM' },
  { icon: FaCogs, label: 'Automatización' },
  { icon: FaCheck, label: 'Venta cerrada' },
]

// Dos composiciones: horizontal para pantallas anchas, zigzag vertical para móviles.
const LAYOUTS = {
  wide: {
    w: 1600, h: 900, r: 54, font: 25, caption: 130,
    d: { x: 800, y: 470, s: 0.5 },
    nodes: [
      { x: 150, y: 470 }, { x: 430, y: 300 }, { x: 700, y: 590 },
      { x: 970, y: 300 }, { x: 1240, y: 590 }, { x: 1470, y: 430 },
    ],
    flow: 'x',
  },
  tall: {
    w: 900, h: 1600, r: 66, font: 36, caption: 95,
    d: { x: 450, y: 720, s: 0.62 },
    nodes: [
      { x: 450, y: 250 }, { x: 190, y: 490 }, { x: 710, y: 730 },
      { x: 190, y: 970 }, { x: 710, y: 1210 }, { x: 450, y: 1430 },
    ],
    flow: 'x',
  },
}

const segmentPath = (a, b, flow) => {
  if (flow === 'x') {
    const dx = (b.x - a.x) * 0.55
    return `M${a.x} ${a.y}C${a.x + dx} ${a.y} ${b.x - dx} ${b.y} ${b.x} ${b.y}`
  }
  const dy = (b.y - a.y) * 0.55
  return `M${a.x} ${a.y}C${a.x} ${a.y + dy} ${b.x} ${b.y - dy} ${b.x} ${b.y}`
}

// Línea de tiempo (0 → 1 a lo largo del scroll de la sección).
const PHASES = {
  hint: [0.0, 0.08],
  trace: [0.02, 0.2],
  fill: [0.16, 0.26],
  word: [0.16, 0.24],
  wordOut: [0.28, 0.34],
  shrink: [0.28, 0.4],
  graph: [0.36, 0.5],
  caption: [0.42, 0.5],
  pulse: [0.48, 0.82],
  outro: [0.83, 0.96],
}

const BG_START = [6, 10, 18]
const BG_END = [255, 255, 255]

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v)
const range = (p, [a, b]) => clamp01((p - a) / (b - a))
const lerp = (a, b, t) => a + (b - a) * t
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2)
const easeOut = (t) => 1 - (1 - t) ** 3
const easeIn = (t) => t * t * t

const getLayoutKey = () =>
  typeof window !== 'undefined' && window.innerWidth / window.innerHeight < 0.9 ? 'tall' : 'wide'

const IntroSequence = ({ onProgressChange }) => {
  const [layoutKey, setLayoutKey] = useState(getLayoutKey)
  const L = LAYOUTS[layoutKey]
  const segs = L.nodes.slice(1).map((n, i) => segmentPath(L.nodes[i], n, L.flow))
  const fullPath = segs.map((d, i) => (i === 0 ? d : d.replace(/^M[^C]+/, ''))).join('')
  const last = L.nodes[L.nodes.length - 1]
  const coverR = Math.hypot(L.w, L.h)

  const sectionRef = useRef(null)
  const stickyRef = useRef(null)
  const auroraRef = useRef(null)
  const stageRef = useRef(null)
  const dGroupRef = useRef(null)
  const traceRef = useRef(null)
  const traceOuterRef = useRef(null)
  const traceCounterRef = useRef(null)
  const solidRef = useRef(null)
  const ringRef = useRef(null)
  const segRefs = useRef([])
  const litRef = useRef(null)
  const trailRef = useRef(null)
  const cometRef = useRef(null)
  const nodeRefs = useRef([])
  const coverRef = useRef(null)
  const wordmarkRef = useRef(null)
  const captionRef = useRef(null)
  const hintRef = useRef(null)

  const progressCbRef = useRef(onProgressChange)
  useEffect(() => {
    progressCbRef.current = onProgressChange
  }, [onProgressChange])

  // Cambia de composición al rotar el teléfono o redimensionar.
  useEffect(() => {
    const onResize = () => setLayoutKey(getLayoutKey())
    window.addEventListener('resize', onResize, { passive: true })
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const lenOf = (el) => (el ? el.getTotalLength() : 0)
    const lenOuter = lenOf(traceOuterRef.current)
    const lenCounter = lenOf(traceCounterRef.current)
    const segLens = segRefs.current.map(lenOf)
    const total = segLens.reduce((a, b) => a + b, 0) || 1
    // Distancia a lo largo del recorrido en la que la luz llega a cada nodo.
    const arrive = [0]
    segLens.forEach((l, i) => arrive.push(arrive[i] + l))
    const trailLen = Math.min(total * 0.12, 260)

    if (traceOuterRef.current) traceOuterRef.current.style.strokeDasharray = `${lenOuter}`
    if (traceCounterRef.current) traceCounterRef.current.style.strokeDasharray = `${lenCounter}`
    segRefs.current.forEach((el, i) => {
      if (el) el.style.strokeDasharray = `${segLens[i]}`
    })
    if (litRef.current) litRef.current.style.strokeDasharray = `${total} ${total}`
    if (trailRef.current) trailRef.current.style.strokeDasharray = `${trailLen} ${total + trailLen}`

    const node0 = L.nodes[0]
    const dEnd = { x: node0.x, y: node0.y, s: (L.r * 1.05) / D_WIDTH }

    let rafId = 0
    let ticking = false
    let visible = false
    let lastStage = -1

    const setVar = (el, name, value) => {
      if (el) el.style.setProperty(name, value)
    }

    const notify = (progress) => {
      const cb = progressCbRef.current
      if (typeof cb !== 'function') return
      const stage = introStageOf(progress)
      if (stage === lastStage) return
      lastStage = stage
      cb(progress)
    }

    const render = (progress) => {
      const tTrace = easeInOut(range(progress, PHASES.trace))
      const tFill = easeInOut(range(progress, PHASES.fill))
      const tWord = easeOut(range(progress, PHASES.word)) * (1 - range(progress, PHASES.wordOut))
      const tShrink = easeInOut(range(progress, PHASES.shrink))
      const tGraph = range(progress, PHASES.graph)
      const tCaption = easeOut(range(progress, PHASES.caption))
      const tPulse = easeInOut(range(progress, PHASES.pulse))
      const tOutro = range(progress, PHASES.outro)

      // 1. Se dibuja la D y se rellena
      if (traceOuterRef.current) traceOuterRef.current.style.strokeDashoffset = `${lenOuter * (1 - tTrace)}`
      if (traceCounterRef.current) {
        const tInner = clamp01((tTrace - 0.45) / 0.55)
        traceCounterRef.current.style.strokeDashoffset = `${lenCounter * (1 - tInner)}`
      }
      setVar(traceRef.current, '--o', `${1 - tFill}`)
      setVar(solidRef.current, '--o', `${tFill}`)

      // 2. La D se encoge y se convierte en el primer nodo del proceso
      if (dGroupRef.current) {
        const x = lerp(L.d.x, dEnd.x, tShrink)
        const y = lerp(L.d.y, dEnd.y, tShrink)
        const s = lerp(L.d.s, dEnd.s, tShrink)
        dGroupRef.current.setAttribute(
          'transform',
          `translate(${x.toFixed(2)} ${y.toFixed(2)}) scale(${s.toFixed(4)}) translate(${-D_CX} ${-D_CY})`
        )
      }
      setVar(ringRef.current, '--o', `${easeOut(clamp01((tShrink - 0.8) / 0.2))}`)

      // 3. Aparecen las conexiones y los pasos, uno tras otro
      const n = segLens.length
      segRefs.current.forEach((el, i) => {
        if (!el) return
        const t = easeInOut(clamp01(tGraph * (n + 1) - i))
        el.style.strokeDashoffset = `${segLens[i] * (1 - t)}`
      })

      // 4. La luz recorre el proceso e ilumina cada paso al llegar
      const pos = tPulse * total
      if (litRef.current) litRef.current.style.strokeDashoffset = `${total - pos}`
      if (trailRef.current) {
        trailRef.current.style.strokeDashoffset = `${trailLen - pos}`
        setVar(trailRef.current, '--o', `${tPulse > 0 && tPulse < 1 ? 1 : 0}`)
      }
      if (cometRef.current && litRef.current) {
        const pt = litRef.current.getPointAtLength(Math.min(pos, total))
        cometRef.current.setAttribute('transform', `translate(${pt.x.toFixed(2)} ${pt.y.toFixed(2)})`)
        const cometO = tPulse > 0 ? Math.min(1, (1 - tOutro) * 1.5) : 0
        setVar(cometRef.current, '--o', `${cometO}`)
      }

      nodeRefs.current.forEach((el, i) => {
        if (!el) return
        const k = i + 1
        const tAppear = easeOut(clamp01(tGraph * (n + 1) - i - 0.4))
        const tLit = clamp01((pos - arrive[k] + 110) / 110)
        el.setAttribute('transform', `scale(${(0.6 + 0.4 * tAppear).toFixed(3)})`)
        setVar(el, '--appear', `${tAppear}`)
        setVar(el, '--lit', `${tLit}`)
        const ping = el.firstChild
        if (ping) {
          const on = tLit > 0 && tLit < 1
          ping.setAttribute('r', `${(L.r * (1 + 0.7 * tLit)).toFixed(1)}`)
          ping.style.opacity = on ? `${1 - tLit}` : '0'
        }
      })

      setVar(captionRef.current, '--o', `${tCaption * (1 - range(progress, [0.82, 0.88]))}`)
      setVar(wordmarkRef.current, '--o', `${tWord}`)
      setVar(hintRef.current, '--o', `${1 - range(progress, PHASES.hint)}`)

      // 5. El último paso se expande y se convierte en la web
      if (coverRef.current) coverRef.current.setAttribute('r', `${(easeIn(clamp01(tOutro / 0.8)) * coverR).toFixed(1)}`)
      setVar(auroraRef.current, '--o', `${1 - tOutro}`)
      if (stickyRef.current) {
        const mix = clamp01((tOutro - 0.78) / 0.12)
        const rgb = BG_START.map((from, i) => Math.round(from + (BG_END[i] - from) * mix))
        stickyRef.current.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`
      }

      notify(progress)
    }

    const getProgress = () => {
      const rect = section.getBoundingClientRect()
      const scrollable = Math.max(section.offsetHeight - window.innerHeight, 1)
      return clamp01(-rect.top / scrollable)
    }

    const update = () => {
      ticking = false
      render(getProgress())
    }

    const onScroll = () => {
      if (!visible || ticking) return
      ticking = true
      rafId = requestAnimationFrame(update)
    }

    const bind = () => {
      window.addEventListener('scroll', onScroll, { passive: true })
      window.addEventListener('resize', onScroll, { passive: true })
      onScroll()
    }

    const unbind = () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (rafId) cancelAnimationFrame(rafId)
      ticking = false
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      // Sin animación: se muestra el proceso completo e iluminado.
      render(PHASES.pulse[1])
      notify(1)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) bind()
        else {
          unbind()
          render(getProgress())
        }
      },
      { threshold: 0 }
    )
    observer.observe(section)
    render(getProgress())

    return () => {
      observer.disconnect()
      unbind()
    }
  }, [layoutKey]) // eslint-disable-line react-hooks/exhaustive-deps

  const iconSize = L.r * 0.8

  return (
    <section id="home" ref={sectionRef} className={styles.section} aria-label="Presentación de Darmi">
      <div ref={stickyRef} className={styles.sticky}>
        <div ref={auroraRef} className={styles.aurora} aria-hidden="true" />

        <div ref={stageRef} className={styles.stage}>
          <svg
            key={layoutKey}
            className={styles.svg}
            viewBox={`0 0 ${L.w} ${L.h}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden="true"
            focusable="false"
          >
            <defs>
              <linearGradient id="introFill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0a5cff" />
                <stop offset="100%" stopColor="#00c2d4" />
              </linearGradient>
              <linearGradient id="introFlow" gradientUnits="userSpaceOnUse"
                x1={L.nodes[0].x} y1={L.nodes[0].y} x2={last.x} y2={last.y}>
                <stop offset="0%" stopColor="#0a5cff" />
                <stop offset="100%" stopColor="#00c2d4" />
              </linearGradient>
              <radialGradient id="introComet">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="35%" stopColor="#7fe3ee" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#00c2d4" stopOpacity="0" />
              </radialGradient>
              <filter id="introBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" />
              </filter>
              <mask id="introMask" maskUnits="userSpaceOnUse" x="-2000" y="-2000" width="4000" height="4000">
                <rect x="-2000" y="-2000" width="4000" height="4000" fill="#fff" />
                <path d={D_COUNTER} fill="#000" />
              </mask>
            </defs>

            <text ref={captionRef} className={styles.caption} x={L.w / 2} y={L.caption}
                  textAnchor="middle" fontSize={L.font * 1.25}>
              Así fluye un proceso con Darmi
            </text>

            {/* Conexiones base (tenues) */}
            {segs.map((d, i) => (
              <path key={d} ref={(el) => { segRefs.current[i] = el }} d={d}
                    className={styles.segment} fill="none" strokeWidth="3" />
            ))}

            {/* Tramo ya recorrido por la luz */}
            <path ref={litRef} d={fullPath} fill="none" stroke="url(#introFlow)" strokeWidth="4" strokeLinecap="round" />
            {/* Estela de la luz */}
            <path ref={trailRef} d={fullPath} className={styles.trail} fill="none" stroke="#7fe3ee"
                  strokeWidth="8" strokeLinecap="round" filter="url(#introBlur)" />

            {/* Pasos del proceso */}
            {STEPS.map((step, i) => {
              const p = L.nodes[i + 1]
              const Icon = step.icon
              return (
                <g key={step.label} transform={`translate(${p.x} ${p.y})`}>
                <g ref={(el) => { nodeRefs.current[i] = el }} className={styles.node}>
                  <circle className={styles.nodePing} r={L.r} fill="none" stroke="#7fe3ee" strokeWidth="3" />
                  <circle className={styles.nodeBase} r={L.r} />
                  <circle className={styles.nodeLit} r={L.r} fill="url(#introFill)" />
                  <g transform={`translate(${-iconSize / 2} ${-iconSize / 2})`}>
                    <Icon size={iconSize} className={styles.nodeIcon} />
                  </g>
                  <text className={styles.nodeLabel}
                        y={layoutKey === 'wide' && p.y < L.h / 2 - 50 ? -(L.r + L.font * 0.9) : L.r + L.font * 1.6}
                        textAnchor="middle" fontSize={L.font}>
                    {step.label}
                  </text>
                </g>
                </g>
              )
            })}

            {/* Anillo del nodo inicial (la D) */}
            <circle ref={ringRef} className={styles.ring} cx={L.nodes[0].x} cy={L.nodes[0].y} r={L.r}
                    fill="rgba(10,92,255,0.12)" stroke="url(#introFill)" strokeWidth="3" />

            {/* La D */}
            <g ref={dGroupRef} transform={`translate(${L.d.x} ${L.d.y}) scale(${L.d.s}) translate(${-D_CX} ${-D_CY})`}>
              <g ref={traceRef} className={styles.trace}>
                <path ref={traceOuterRef} d={D_OUTER} fill="none" stroke="url(#introFill)" strokeWidth="7" />
                <path ref={traceCounterRef} d={D_COUNTER} fill="none" stroke="url(#introFill)" strokeWidth="7" />
              </g>
              <g ref={solidRef} className={styles.solid}>
                <path d={D_OUTER} fill="url(#introFill)" mask="url(#introMask)" />
              </g>
            </g>

            {/* Nombre bajo la D al inicio */}
            <g ref={wordmarkRef} className={styles.wordmark}>
              <text className={styles.brand} x={L.d.x} y={L.d.y - D_CY * L.d.s + L.font * 3.6}
                    textAnchor="middle" fontSize={L.font * 2.6}>Darmi</text>
              <text className={styles.tagline} x={L.d.x} y={L.d.y - D_CY * L.d.s + L.font * 5.4}
                    textAnchor="middle" fontSize={L.font * 0.9}>IA APLICADA A PROCESOS</text>
            </g>

            {/* La luz */}
            <g ref={cometRef} className={styles.comet}>
              <circle r={L.r * 0.7} fill="url(#introComet)" />
              <circle r={L.r * 0.16} fill="#ffffff" />
            </g>

            {/* El último paso se abre y da paso al sitio */}
            <circle ref={coverRef} cx={last.x} cy={last.y} r="0" fill="#ffffff" />
          </svg>

        </div>

        <div ref={hintRef} className={styles.hint} aria-hidden="true">
          <span>Desliza</span>
          <span className={styles.hintTrack}>
            <span className={styles.hintDot} />
          </span>
        </div>
      </div>
    </section>
  )
}

export default IntroSequence
