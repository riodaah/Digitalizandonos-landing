import { motion, useReducedMotion } from 'framer-motion'

// Movimiento propio de cada ícono (en bucle, suave).
const LOOPS = {
  // engranajes que giran
  spin: { animate: { rotate: 360 }, transition: { duration: 6, ease: 'linear', repeat: Infinity } },
  // robot que flota y mira a los lados
  bob: {
    animate: { y: [0, -3, 0, -2, 0], rotate: [0, -8, 0, 8, 0] },
    transition: { duration: 3.2, ease: 'easeInOut', repeat: Infinity },
  },
  // equipo que "late"
  pulse: {
    animate: { scale: [1, 1.18, 1, 1.1, 1] },
    transition: { duration: 2.4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.6 },
  },
  // enchufe que se conecta y da chispa
  zap: {
    animate: { y: [-5, 0, 0, -5], scale: [1, 1, 1.15, 1] },
    transition: { duration: 2.6, ease: 'easeInOut', repeat: Infinity, times: [0, 0.35, 0.45, 1] },
  },
}

const AnimatedIcon = ({ children, anim = 'pulse', delay = 0, size = 48 }) => {
  const reduce = useReducedMotion()
  const loop = LOOPS[anim] || LOOPS.pulse

  return (
    <span className="relative inline-flex shrink-0" style={{ width: size, height: size }}>
      {/* halo lima que respira detrás del ícono */}
      {!reduce && (
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 rounded-[14px] bg-lime"
          initial={{ opacity: 0.35, scale: 1 }}
          animate={{ opacity: [0.35, 0], scale: [1, 1.45] }}
          transition={{ duration: 2.4, ease: 'easeOut', repeat: Infinity, delay }}
        />
      )}

      {/* borde con luz que recorre el contorno */}
      <span aria-hidden="true" className="absolute inset-0 rounded-[14px] overflow-hidden">
        <span
          className={`absolute -inset-[60%] ${reduce ? '' : 'animate-[spin_3.5s_linear_infinite] group-hover:animate-[spin_1.4s_linear_infinite]'}`}
          style={{ background: 'conic-gradient(from 0deg, transparent 0 55%, #3550e0 70%, #c6f432 85%, transparent 100%)' }}
        />
      </span>

      {/* placa oscura */}
      <span className="absolute inset-[2px] rounded-[12px] bg-ink flex items-center justify-center text-lime text-[20px] transition-transform duration-300 group-hover:scale-105"
            style={{ boxShadow: 'inset 0 0 18px rgba(198,244,50,.12)' }}>
        <motion.span
          className="flex"
          animate={reduce ? undefined : loop.animate}
          transition={reduce ? undefined : { ...loop.transition, delay }}
          style={{ filter: 'drop-shadow(0 0 6px rgba(198,244,50,.55))' }}
        >
          {children}
        </motion.span>
      </span>
    </span>
  )
}

export default AnimatedIcon
