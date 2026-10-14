import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const STORAGE_KEY = 'darmi_cookie_consent'

const CookieBanner = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) setVisible(true)
    } catch {
      // localStorage no disponible (modo privado, etc.)
    }
  }, [])

  const accept = (level) => {
    try {
      localStorage.setItem(STORAGE_KEY, level)
    } catch {}
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 24, stiffness: 260 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[60]"
        >
          <div className="bg-[#0f1d35] border border-white/10 rounded-2xl p-5 shadow-2xl">
            <p className="text-white font-semibold text-[15px] mb-1">🍪 Este sitio usa cookies</p>
            <p className="text-slate-400 text-[13px] mb-4 leading-relaxed">
              Usamos cookies analíticas (Google Analytics) para mejorar la experiencia. Puedes aceptarlas todas o solo las esenciales.{' '}
              <Link to="/politicas-de-privacidad" className="text-primary hover:underline">
                Más información
              </Link>
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => accept('all')}
                className="flex-1 bg-primary hover:bg-primary/90 text-white text-[13px] font-semibold py-2.5 px-4 rounded-xl transition-colors"
              >
                Aceptar todas
              </button>
              <button
                onClick={() => accept('essential')}
                className="flex-1 bg-white/10 hover:bg-white/20 text-white text-[13px] font-medium py-2.5 px-4 rounded-xl transition-colors"
              >
                Solo esenciales
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieBanner
