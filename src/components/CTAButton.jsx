import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import config from '../config.json'

const CTAButton = ({ text = 'Habla con Sam' }) => {
  return (
    <motion.a
      href={config.contact.whatsapp_url}
      target="_blank"
      rel="noopener noreferrer"
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





