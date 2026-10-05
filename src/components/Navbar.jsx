import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { INTRO_STAGES } from './introStages'
import config from '../config.json'
import { openWhatsApp } from '../lib/whatsapp'

const menuItems = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Stack', href: '#stack' },
  { name: 'Cómo trabajamos', href: '#como' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Contacto', href: '#contacto' },
]

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${showHeader ? 'opacity-100 translate-y-0 glass-nav pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'} ${scrolled ? 'py-2' : 'py-3'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" aria-label="Darmi, ir al inicio"
           className={`flex items-center gap-2.5 transition-all duration-500 ${showHeader ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
          <img src="/Images/Logo oficial hd.png" alt="" className="h-9 w-auto" />
          <span className="font-display font-extrabold text-[22px] tracking-tight text-ink">Darmi</span>
        </a>

        <div className="hidden lg:flex items-center gap-7 ml-auto">
          <div className={`flex items-center gap-7 transition-all duration-500 ${showMenu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
            {menuItems.map((item) => (
              <a key={item.name} href={item.href}
                 className="text-[14.5px] font-medium text-ink-soft hover:text-ink transition-colors">
                {item.name}
              </a>
            ))}
          </div>
          <a href={config.contact.whatsapp_url} onClick={openWhatsApp}
             className={`btn-primary !py-2.5 !px-5 text-[14px] transition-all duration-500 ${showCta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
            Conversemos
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-3 ml-auto">
          <a href={config.contact.whatsapp_url} onClick={openWhatsApp}
             className={`btn-primary !py-2 !px-4 !text-[13px] transition-all duration-500 ${showCta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
            Conversemos
          </a>
          <button
            className={`text-2xl text-ink transition-all duration-500 ${showMenu ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menú" aria-expanded={mobileMenuOpen}>
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
        </div>
      )}
    </nav>
  )
}

export default Navbar
