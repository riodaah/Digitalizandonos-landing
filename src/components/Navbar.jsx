import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import config from '../config.json'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Quiénes Somos', href: '#agentes' },
    { name: 'Servicios', href: '#marketing' },
    { name: 'Contacto', href: '#contacto' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-3">
          <img 
            src="/Images/Logo oficial hd.png" 
            alt="Digitalizándonos" 
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-secondary transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
          <a
            href={config.contact.whatsapp_url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gradient-to-r from-secondary to-primary rounded-full font-semibold hover:scale-105 transition-transform duration-300 glow-hover"
          >
            Agendar con {config.agent.name}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white text-2xl"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-effect mt-4"
        >
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-secondary transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <a
              href={config.contact.whatsapp_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-secondary to-primary rounded-full font-semibold text-center"
            >
              Agendar con {config.agent.name}
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar





