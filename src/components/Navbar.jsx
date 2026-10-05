import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import config from '../config.json'
import { openWhatsApp } from '../lib/whatsapp'

const menuItems = [
  { name: 'Servicios', href: '#servicios' },
  { name: 'Stack', href: '#stack' },
  { name: 'Cómo trabajamos', href: '#como' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Contacto', href: '#contacto' },
]

const Navbar = () => {
  // Sobre el hero oscuro el header es transparente con texto claro; al bajar pasa a blanco.
  const [onHero, setOnHero] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('home')
      const limit = hero ? hero.offsetHeight - 72 : 24
      setOnHero(window.scrollY < limit)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const dark = onHero && !mobileMenuOpen
  const linkCls = dark ? 'text-white/75 hover:text-white' : 'text-ink-soft hover:text-ink'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${dark ? 'bg-transparent py-4' : 'glass-nav py-2.5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" aria-label="Darmi, ir al inicio" className="flex items-center gap-2.5">
          <img src="/Images/Logo oficial hd.png" alt="" className="h-9 w-auto" />
          <span className={`font-display font-extrabold text-[22px] tracking-tight transition-colors ${dark ? 'text-white' : 'text-ink'}`}>Darmi</span>
        </a>

        <div className="hidden lg:flex items-center gap-7 ml-auto">
          {menuItems.map((item) => (
            <a key={item.name} href={item.href}
               className={`text-[14.5px] font-medium transition-colors ${linkCls}`}>
              {item.name}
            </a>
          ))}
          <a href={config.contact.whatsapp_url} onClick={openWhatsApp} className="btn-primary !py-2.5 !px-5 text-[14px]">
            Conversemos
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-3 ml-auto">
          <a href={config.contact.whatsapp_url} onClick={openWhatsApp} className="btn-primary !py-2 !px-4 !text-[13px]">
            Conversemos
          </a>
          <button className={`text-2xl transition-colors ${dark ? 'text-white' : 'text-ink'}`}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  aria-label="Menú" aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
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
