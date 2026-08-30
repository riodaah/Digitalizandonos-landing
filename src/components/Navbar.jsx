import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaSignInAlt } from 'react-icons/fa'
import { INTRO_STAGES } from './introStages'
import config from '../config.json'

const Navbar = ({ introProgress = 1 }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const safeProgress = Number.isFinite(introProgress) ? introProgress : 1
  const showHeader = safeProgress >= INTRO_STAGES.bar
  const showCta = safeProgress >= INTRO_STAGES.cta
  const showMenu = safeProgress >= INTRO_STAGES.menu

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!showMenu) setMobileMenuOpen(false)
  }, [showMenu])

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${showHeader ? 'opacity-100 translate-y-0 glass-nav pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'} ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          className={`flex items-center transition-all duration-500 ${showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
        >
          <img src="/Images/Logo oficial hd.png" alt="Digitalizándonos" className="h-10 w-auto" />
        </a>

        <div className="hidden lg:flex items-center gap-4 ml-auto">
          <a href={config.contact.whatsapp_url} onClick={handleWhatsAppClick}
             className={`btn-primary !py-2.5 !px-5 text-[14px] transition-all duration-500 ${showCta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
            Agenda una demo
          </a>
          <div className={`flex items-center gap-7 transition-all duration-500 ${showMenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
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
          </div>
        </div>

        <div className="lg:hidden flex items-center gap-3 ml-auto">
          <a
            href={config.contact.whatsapp_url}
            onClick={handleWhatsAppClick}
            className={`btn-primary !py-2 !px-4 !text-[13px] transition-all duration-500 ${showCta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
          >
            Agenda demo
          </a>
          <button
            className={`text-2xl text-ink transition-all duration-500 ${showMenu ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && showMenu && (
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
