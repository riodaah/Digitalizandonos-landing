import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import config from '../config.json'

const Footer = ({ openPolicy }) => {
  return (
    <footer className="bg-[#0b1626] text-slate-300">
      <div className="container mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Marca */}
          <div>
            <img src="/Images/Logo oficial hd.png" alt="Digitalizándonos" className="h-11 w-auto mb-4" />
            <p className="text-slate-400 text-sm max-w-[240px]">
              Agentes de inteligencia artificial para pymes y empresas de Chile y LATAM.
              Atienden, cotizan, agendan y automatizan tus procesos.
            </p>
            <div className="flex gap-4 mt-5">
              <a href={config.socials.instagram} target="_blank" rel="noopener noreferrer"
                 aria-label="Instagram de Digitalizándonos"
                 className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg hover:bg-primary hover:text-white transition-colors">
                <FaInstagram />
              </a>
              {config.socials.linkedin && (
                <a href={config.socials.linkedin} target="_blank" rel="noopener noreferrer"
                   aria-label="LinkedIn de Digitalizándonos"
                   className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg hover:bg-primary hover:text-white transition-colors">
                  <FaLinkedin />
                </a>
              )}
            </div>
          </div>

          {/* Agentes */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Agentes IA</h4>
            <div className="space-y-2.5 text-sm">
              <a href="#skills" className="block text-slate-400 hover:text-white transition-colors">Skills y capacidades</a>
              <a href="#procesos" className="block text-slate-400 hover:text-white transition-colors">Agentes de procesos</a>
              <a href="#industrias" className="block text-slate-400 hover:text-white transition-colors">Industrias</a>
              <a href="#planes" className="block text-slate-400 hover:text-white transition-colors">Planes y precios</a>
              <a href="#faq" className="block text-slate-400 hover:text-white transition-colors">Preguntas frecuentes</a>
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Empresa</h4>
            <div className="space-y-2.5 text-sm">
              <a href="#nosotros" className="block text-slate-400 hover:text-white transition-colors">Quiénes somos</a>
              <a href="https://intranet-digitalizandonos.web.app/" target="_blank" rel="noopener noreferrer"
                 className="block text-slate-400 hover:text-white transition-colors">Intranet clientes</a>
              <button onClick={() => openPolicy('privacy')} className="block text-slate-400 hover:text-white transition-colors">
                Política de privacidad
              </button>
              <button onClick={() => openPolicy('terms')} className="block text-slate-400 hover:text-white transition-colors">
                Términos y condiciones
              </button>
              <button onClick={() => openPolicy('cookies')} className="block text-slate-400 hover:text-white transition-colors">
                Política de cookies
              </button>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Escríbenos</h4>
            <div className="space-y-3 text-sm">
              <a href={`mailto:${config.contact.email}`}
                 className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors">
                <FaEnvelope className="text-primary" /> {config.contact.email}
              </a>
              <a href={config.contact.whatsapp_url} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors">
                <FaWhatsapp className="text-primary" /> {config.contact.phone}
              </a>
              <div className="flex items-start gap-2.5 text-slate-400">
                <FaMapMarkerAlt className="text-primary mt-1 shrink-0" />
                <span>{config.contact.address}<br />Santiago, Chile</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Digitalizándonos. Todos los derechos reservados.</p>
          <p>Hecho en Chile 🇨🇱 con inteligencia artificial y mucho café.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
