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
        <p>En Darmi recopilamos la información necesaria para prestar nuestros servicios de automatización, agentes de inteligencia artificial e implementación de CRM.</p>
        
        <h3>2. Uso de la información</h3>
        <p>Utilizamos tu información para:</p>
        <ul>
          <li>Proporcionar y mejorar nuestros servicios</li>
          <li>Comunicarnos contigo sobre tus proyectos</li>
          <li>Cumplir con obligaciones legales</li>
        </ul>
        
        <h3>3. Protección de datos e inteligencia artificial</h3>
        <p>Implementamos medidas de seguridad para proteger tu información personal. La información de tu empresa y de tus clientes (conversaciones, documentos, bases de datos) se utiliza exclusivamente para operar las soluciones que implementamos para ti. <strong>Jamás entrenamos modelos de inteligencia artificial con tus datos confidenciales.</strong></p>
        
        <h3>4. Contacto</h3>
        <p>Para consultas sobre privacidad: contacto@darmi.cl</p>
      `
    },
    terms: {
      title: 'Términos y Condiciones',
      content: `
        <h3>1. Aceptación de términos</h3>
        <p>Al usar nuestros servicios, aceptas estos términos y condiciones.</p>
        
        <h3>2. Servicios</h3>
        <p>Darmi ofrece:</p>
        <ul>
          <li>Automatización de procesos</li>
          <li>Agentes de inteligencia artificial para WhatsApp, Instagram, web y correo</li>
          <li>Implementación de CRM</li>
          <li>Integraciones con ERP, APIs, bases de datos y dashboards</li>
          <li>Soporte y mejora continua</li>
        </ul>
        
        <h3>3. Tarifas</h3>
        <p>Las condiciones comerciales de cada servicio se definen en la propuesta o contrato acordado con cada cliente.</p>
        
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
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-line">
            <h2 className="text-2xl font-bold">{policy.title}</h2>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-ink transition-colors text-2xl"
            >
              <FaTimes />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
            <div 
              className="space-y-3 text-[15px] text-ink-soft [&_h3]:text-ink [&_h3]:font-semibold [&_h3]:text-[17px] [&_h3]:mt-5 [&_ul]:list-disc [&_ul]:pl-6"
              dangerouslySetInnerHTML={{ __html: policy.content }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PopupPolicies





