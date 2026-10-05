import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import config from '../config.json'

const Footer = ({ openPolicy }) => (
  <footer className="bg-[#0b1626] text-slate-300">
    <div className="container mx-auto px-6 py-14">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img src="/Images/Logo oficial hd.png" alt="" className="h-10 w-auto" />
            <span className="font-display font-extrabold text-[22px] text-white">Darmi</span>
          </div>
          <p className="text-slate-400 text-sm max-w-[260px]">
            Agencia de automatización con IA. Automatización de procesos, agentes de IA e implementación de CRM.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-4">Darmi</h4>
          <div className="space-y-2.5 text-sm">
            <a href="#servicios" className="block text-slate-400 hover:text-white transition-colors">Servicios</a>
            <a href="#stack" className="block text-slate-400 hover:text-white transition-colors">Stack tecnológico</a>
            <a href="#como" className="block text-slate-400 hover:text-white transition-colors">Cómo trabajamos</a>
            <a href="#nosotros" className="block text-slate-400 hover:text-white transition-colors">Nosotros</a>
            <button onClick={() => openPolicy('privacy')} className="block text-slate-400 hover:text-white transition-colors">Política de privacidad</button>
            <button onClick={() => openPolicy('terms')} className="block text-slate-400 hover:text-white transition-colors">Términos y condiciones</button>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-white mb-4">Contacto</h4>
          <div className="space-y-3 text-sm">
            <a href={`mailto:${config.contact.email}`} className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors">
              <FaEnvelope className="text-primary" /> {config.contact.email}
            </a>
            <a href={config.contact.whatsapp_url} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors">
              <FaWhatsapp className="text-primary" /> {config.contact.phone}
            </a>
            <p className="text-slate-400">Santiago, Chile</p>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Darmi · darmi.cl</p>
        <p>Hecho en Chile 🇨🇱</p>
      </div>
    </div>
  </footer>
)

export default Footer
