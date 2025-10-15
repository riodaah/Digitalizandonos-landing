import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { useEffect } from 'react'

const PopupPolicies = ({ type, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const policies = {
    privacy: {
      title: 'Política de Privacidad',
      content: `
        <h3>1. Información que recopilamos</h3>
        <p>En Digitalizándonos recopilamos información personal necesaria para proporcionar nuestros servicios de asistentes virtuales y marketing digital.</p>
        
        <h3>2. Uso de la información</h3>
        <p>Utilizamos tu información para:</p>
        <ul>
          <li>Proporcionar y mejorar nuestros servicios</li>
          <li>Comunicarnos contigo sobre tus proyectos</li>
          <li>Cumplir con obligaciones legales</li>
        </ul>
        
        <h3>3. Protección de datos</h3>
        <p>Implementamos medidas de seguridad para proteger tu información personal.</p>
        
        <h3>4. Contacto</h3>
        <p>Para consultas sobre privacidad: info@digitalizandonos.cl</p>
      `
    },
    terms: {
      title: 'Términos y Condiciones',
      content: `
        <h3>1. Aceptación de términos</h3>
        <p>Al usar nuestros servicios, aceptas estos términos y condiciones.</p>
        
        <h3>2. Servicios</h3>
        <p>Digitalizándonos ofrece:</p>
        <ul>
          <li>Desarrollo de asistentes virtuales con IA</li>
          <li>Gestión de marketing digital</li>
          <li>Producción de contenido</li>
          <li>Gestión de campañas publicitarias</li>
        </ul>
        
        <h3>3. Tarifas</h3>
        <p>Las campañas publicitarias tienen un fee del 20% sobre el presupuesto invertido.</p>
        
        <h3>4. Propiedad intelectual</h3>
        <p>El contenido y código desarrollado permanece bajo propiedad de acuerdo a lo especificado en cada contrato.</p>
      `
    },
    cookies: {
      title: 'Política de Cookies',
      content: `
        <h3>1. ¿Qué son las cookies?</h3>
        <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo.</p>
        
        <h3>2. Uso de cookies</h3>
        <p>Utilizamos cookies para:</p>
        <ul>
          <li>Mejorar la experiencia del usuario</li>
          <li>Analizar el tráfico del sitio</li>
          <li>Recordar tus preferencias</li>
        </ul>
        
        <h3>3. Tipos de cookies</h3>
        <ul>
          <li><strong>Esenciales:</strong> Necesarias para el funcionamiento del sitio</li>
          <li><strong>Analíticas:</strong> Nos ayudan a entender cómo usas el sitio</li>
        </ul>
        
        <h3>4. Control de cookies</h3>
        <p>Puedes controlar y eliminar cookies desde tu navegador.</p>
      `
    }
  }

  const policy = policies[type] || policies.privacy

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-effect rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h2 className="text-2xl font-bold">{policy.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-2xl"
            >
              <FaTimes />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
            <div 
              className="prose prose-invert prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 max-w-none"
              dangerouslySetInnerHTML={{ __html: policy.content }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PopupPolicies





