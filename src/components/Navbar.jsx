import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaSignInAlt } from 'react-icons/fa'
import config from '../config.json'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsAppClick = (e) => {
    e.preventDefault()
    if (typeof window !== 'undefined' && window.gtag_report_conversion) {
      window.gtag_report_conversion(config.contact.whatsapp_url)
    } else {
      window.open(config.contact.whatsapp_url, '_blank', 'noopener,noreferrer')
    }
  }

  const menuItems = [
    { name: 'Agentes', href: '#skills' },
    { name: 'Cómo funciona', href: '#como' },
    { name: 'Industrias', href: '#industrias' },
    { name: 'Planes', href: '#planes' },
    { name: 'Quiénes somos', href: '#nosotros' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-nav ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <img src="/Images/Logo oficial hd.png" alt="Digitalizándonos" className="h-10 w-auto" />
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href}
               className="text-[14.5px] font-medium text-ink-soft hover:text-ink transition-colors">
              {item.name}
            </a>
          ))}
          <a href="https://intranet-digitalizandonos.web.app/" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 text-[14px] font-medium text-ink-soft hover:text-primary transition-colors">
            <FaSignInAlt /> Intranet
          </a>
          <a href={config.contact.whatsapp_url} onClick={handleWhatsAppClick}
             className="btn-primary !py-2.5 !px-5 text-[14px]">
            Agenda una demo
          </a>
        </div>

        <button className="lg:hidden text-2xl text-ink" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menú">
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-line px-6 py-4 flex flex-col gap-4 shadow-card">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}
               className="text-[15px] font-medium text-ink-soft">{item.name}</a>
          ))}
          <a href="https://intranet-digitalizandonos.web.app/" target="_blank" rel="noopener noreferrer"
             className="text-[15px] font-medium text-ink-soft flex items-center gap-2"><FaSignInAlt /> Intranet</a>
          <a href={config.contact.whatsapp_url} onClick={handleWhatsAppClick} className="btn-primary text-center">
            Agenda una demo
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
