import { useEffect, useRef } from 'react'
import { interpolate } from 'flubber'
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa'
import { introStageOf } from './introStages'
import styles from './IntroSequence.module.css'

// Contornos de la "D" de Schibsted Grotesk (peso 800) en unidades de la fuente.
const D_OUTER =
  'M64.94 0L64.94 -703.12L355.96 -703.12Q483.4 -703.12 563.96 -662.11Q644.53 -621.09 682.86 -542.72Q721.19 -464.36 721.19 -352.54Q721.19 -237.79 681.4 -159.18Q641.6 -80.57 560.3 -40.28Q479 0 354.49 0Z'
const D_COUNTER =
  'M241.21 -149.9L335.45 -149.9Q537.11 -149.9 537.11 -351.56Q537.11 -416.5 515.14 -461.43Q493.16 -506.35 448.97 -529.79Q404.79 -553.22 336.91 -553.22L241.21 -553.22Z'

// Cabeza del agente, en el mismo sistema de coordenadas que la D y con el mismo
// punto de partida y sentido de giro, para que el morph no se retuerza.
// Antena, auriculares, visor y ojos se animan aparte: como piezas sueltas no
// tienen equivalente en la letra.
const AGENT_HEAD =
  'M83 -290L83 -510Q83 -680 253 -680L533 -680Q703 -680 703 -510L703 -290Q703 -120 533 -120L253 -120Q83 -120 83 -290Z'
const AGENT_COUNTER =
  'M393 -360C415.09 -360 433 -377.91 433 -400C433 -422.09 415.09 -440 393 -440C370.91 -440 353 -422.09 353 -400C353 -377.91 370.91 -360 393 -360Z'

const PHASES = {
  hint: [0.0, 0.1],
  trace: [0.02, 0.3],
  fill: [0.28, 0.42],
  morph: [0.42, 0.6],
  close: [0.44, 0.56],
  ears: [0.52, 0.62],
  antenna: [0.54, 0.64],
  visor: [0.58, 0.68],
  eyes: [0.64, 0.74],
  channels: [0.68, 0.78],
  wordmark: [0.76, 0.86],
  outro: [0.88, 1.0],
}

const CHANNEL_STAGGER = 0.04

const CHANNELS = [
  { key: 'wa', icon: <FaWhatsapp />, label: 'WhatsApp', cls: 'chipA' },
  { key: 'ig', icon: <FaInstagram />, label: 'Instagram', cls: 'chipB' },
  { key: 'mail', icon: <FaEnvelope />, label: 'Correo', cls: 'chipC' },
]

const BG_START = [6, 10, 18]
const BG_END = [255, 255, 255]

const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v)
const range = (p, [a, b]) => clamp01((p - a) / (b - a))
const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2)
const easeOut = (t) => 1 - (1 - t) ** 3
const easeOutBack = (t) => 1 + 2.7 * (t - 1) ** 3 + 1.7 * (t - 1) ** 2

const IntroSequence = ({ onProgressChange }) => {
  const sectionRef = useRef(null)
  const stickyRef = useRef(null)
  const auroraRef = useRef(null)
  const stageRef = useRef(null)
  const traceRef = useRef(null)
  const traceOuterRef = useRef(null)
  const traceCounterRef = useRef(null)
  const solidRef = useRef(null)
  const headRef = useRef(null)
  const maskCounterRef = useRef(null)
  const antennaRef = useRef(null)
  const earsRef = useRef(null)
  const earLeftRef = useRef(null)
  const earRightRef = useRef(null)
  const visorRef = useRef(null)
  const eyesRef = useRef(null)
  const glowRef = useRef(null)
  const chipRefs = useRef([])
  const wordmarkRef = useRef(null)
  const hintRef = useRef(null)

  const progressCbRef = useRef(onProgressChange)
  useEffect(() => {
    progressCbRef.current = onProgressChange
  }, [onProgressChange])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const morphHead = interpolate(D_OUTER, AGENT_HEAD, { maxSegmentLength: 8 })
    const morphCounter = interpolate(D_COUNTER, AGENT_COUNTER, { maxSegmentLength: 8 })

    const traceOuter = traceOuterRef.current
    const traceCounter = traceCounterRef.current
    const lenOuter = traceOuter ? traceOuter.getTotalLength() : 0
    const lenCounter = traceCounter ? traceCounter.getTotalLength() : 0
    if (traceOuter) traceOuter.style.strokeDasharray = `${lenOuter}`
    if (traceCounter) traceCounter.style.strokeDasharray = `${lenCounter}`

    let rafId = 0
    let ticking = false
    let visible = false
    let lastStage = -1
    let lastMorphT = -1

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
      const tMorph = easeInOut(range(progress, PHASES.morph))
      const tClose = easeInOut(range(progress, PHASES.close))
      const tEars = easeOut(range(progress, PHASES.ears))
      const tAntenna = range(progress, PHASES.antenna)
      const tVisor = easeOut(range(progress, PHASES.visor))
      const tEyes = easeOut(range(progress, PHASES.eyes))
      const tWord = easeOut(range(progress, PHASES.wordmark))
      const tOutro = range(progress, PHASES.outro)

      // Trazado del contorno de la D
      if (tFill < 1) {
        if (traceOuter) traceOuter.style.strokeDashoffset = `${lenOuter * (1 - tTrace)}`
        if (traceCounter) {
          const tInner = clamp01((tTrace - 0.45) / 0.55)
          traceCounter.style.strokeDashoffset = `${lenCounter * (1 - tInner)}`
        }
      }
      setVar(traceRef.current, '--o', `${1 - tFill}`)

      // Relleno y morph de la letra hacia la cabeza del agente
      setVar(solidRef.current, '--o', `${tFill}`)
      if (tFill > 0 && tMorph !== lastMorphT) {
        lastMorphT = tMorph
        if (headRef.current) headRef.current.setAttribute('d', morphHead(tMorph))
        if (maskCounterRef.current) maskCounterRef.current.setAttribute('d', morphCounter(tMorph))
      }
      setVar(maskCounterRef.current, '--o', `${1 - tClose}`)

      // Auriculares que se despliegan hacia los lados
      setVar(earsRef.current, '--o', `${tEars}`)
      const earShift = (1 - tEars) * 26
      if (earLeftRef.current) {
        earLeftRef.current.setAttribute('transform', `translate(${earShift.toFixed(2)} 0)`)
      }
      if (earRightRef.current) {
        earRightRef.current.setAttribute('transform', `translate(${(-earShift).toFixed(2)} 0)`)
      }

      // La antena brota desde la cabeza con un leve rebote
      if (antennaRef.current) {
        const grow = tAntenna <= 0 ? 0 : easeOutBack(tAntenna)
        antennaRef.current.setAttribute(
          'transform',
          `translate(0 -680) scale(1 ${grow.toFixed(4)}) translate(0 680)`
        )
      }

      // Visor y ojos
      setVar(visorRef.current, '--o', `${0.72 * tVisor}`)
      if (visorRef.current) {
        visorRef.current.setAttribute(
          'transform',
          `translate(0 -440) scale(1 ${(0.6 + 0.4 * tVisor).toFixed(3)}) translate(0 440)`
        )
      }
      setVar(eyesRef.current, '--o', `${tEyes}`)

      setVar(glowRef.current, '--o', `${0.25 + 0.75 * tFill}`)

      // Canales que entran escalonados
      const channelSpan = PHASES.channels[1] - PHASES.channels[0]
      CHANNELS.forEach((_, i) => {
        const start = PHASES.channels[0] + i * CHANNEL_STAGGER
        const t = easeOut(range(progress, [start, start + channelSpan]))
        const chip = chipRefs.current[i]
        setVar(chip, '--o', `${t}`)
        setVar(chip, '--ry', `${(1 - t) * 26}px`)
        setVar(chip, '--rs', `${0.88 + 0.12 * t}`)
      })

      setVar(wordmarkRef.current, '--o', `${tWord}`)
      setVar(wordmarkRef.current, '--ry', `${(1 - tWord) * 22}px`)

      setVar(hintRef.current, '--o', `${1 - range(progress, PHASES.hint)}`)

      // Entrega al sitio: la escena se disuelve y el fondo pasa a blanco
      const sceneOpacity = 1 - tOutro
      setVar(stageRef.current, '--o', `${sceneOpacity}`)
      setVar(auroraRef.current, '--o', `${sceneOpacity}`)
      if (stickyRef.current) {
        const mix = easeInOut(tOutro)
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
      render(PHASES.wordmark[1])
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
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className={styles.section}
      aria-label="Presentación de Digitalizándonos"
    >
      <div ref={stickyRef} className={styles.sticky}>
        <div ref={auroraRef} className={styles.aurora} aria-hidden="true" />

        <div ref={stageRef} className={styles.stage}>
          <svg className={styles.svg} viewBox="0 0 1000 1000" aria-hidden="true" focusable="false">
            <defs>
              <linearGradient id="introFill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0a5cff" />
                <stop offset="100%" stopColor="#00c2d4" />
              </linearGradient>
              <radialGradient id="introGlow">
                <stop offset="0%" stopColor="#0a5cff" stopOpacity="0.5" />
                <stop offset="60%" stopColor="#00c2d4" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#00c2d4" stopOpacity="0" />
              </radialGradient>
              <mask
                id="introMask"
                maskUnits="userSpaceOnUse"
                x="-2000"
                y="-2000"
                width="4000"
                height="4000"
              >
                <rect x="-2000" y="-2000" width="4000" height="4000" fill="#fff" />
                <path ref={maskCounterRef} className={styles.maskCounter} d={D_COUNTER} fill="#000" />
              </mask>
            </defs>

            <g transform="translate(500 500) scale(0.8) translate(-393.07 351.56)">
              <ellipse
                ref={glowRef}
                className={styles.glow}
                cx="393"
                cy="-400"
                rx="560"
                ry="520"
                fill="url(#introGlow)"
              />

              <g ref={traceRef} className={styles.trace}>
                <path ref={traceOuterRef} d={D_OUTER} fill="none" stroke="url(#introFill)" strokeWidth="7" />
                <path ref={traceCounterRef} d={D_COUNTER} fill="none" stroke="url(#introFill)" strokeWidth="7" />
              </g>

              <g ref={solidRef} className={styles.solid}>
                <g ref={earsRef} className={styles.ears}>
                  <rect ref={earLeftRef} x="39" y="-470" width="64" height="140" rx="26" fill="url(#introFill)" />
                  <rect ref={earRightRef} x="683" y="-470" width="64" height="140" rx="26" fill="url(#introFill)" />
                </g>

                <g ref={antennaRef} transform="translate(0 -680) scale(1 0) translate(0 680)">
                  <rect x="377" y="-790" width="32" height="112" rx="16" fill="url(#introFill)" />
                  <circle className={styles.led} cx="393" cy="-818" r="36" fill="#7fe3ee" />
                </g>

                <path ref={headRef} d={D_OUTER} fill="url(#introFill)" mask="url(#introMask)" />

                <rect
                  ref={visorRef}
                  className={styles.visor}
                  x="143"
                  y="-560"
                  width="500"
                  height="240"
                  rx="120"
                  fill="#06121f"
                />

                <g ref={eyesRef} className={styles.eyes}>
                  <circle cx="295" cy="-440" r="42" fill="#fff" />
                  <circle cx="491" cy="-440" r="42" fill="#fff" />
                </g>
              </g>
            </g>
          </svg>

          {CHANNELS.map((channel, i) => (
            <div
              key={channel.key}
              ref={(el) => { chipRefs.current[i] = el }}
              className={`${styles.chip} ${styles[channel.cls]}`}
            >
              <span className={styles.chipIcon}>{channel.icon}</span>
              <span className={styles.chipLabel}>{channel.label}</span>
            </div>
          ))}

          <div ref={wordmarkRef} className={styles.wordmark}>
            <p className={styles.brand}>Digitalizándonos</p>
            <p className={styles.tagline}>Implementamos Agentes IA</p>
          </div>
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
