import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import config from '../config.json'

const CTAButton = ({ text = 'Habla con Sam' }) => {
  const handleClick = (e) => {
    e.preventDefault()
    // Llamar a la función de tracking de Google Ads
    if (typeof window !== 'undefined' && window.gtag_report_conversion) {
      window.gtag_report_conversion(config.contact.whatsapp_url)
    } else {
      // Fallback si no está disponible el tracking
      window.open(config.contact.whatsapp_url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <motion.a
      href={config.contact.whatsapp_url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-secondary to-primary rounded-full font-bold text-lg text-white shadow-2xl glow-hover transition-all duration-300"
    >
      <FaWhatsapp className="text-2xl" />
      <span>{text}</span>
    </motion.a>
  )
}

export default CTAButton





