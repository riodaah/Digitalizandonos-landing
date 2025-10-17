import { FaWhatsapp, FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import config from '../config.json'

const Footer = ({ openPolicy }) => {
  return (
    <footer className="relative bg-black/50 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1">
            <img 
              src="/Images/Logo oficial hd.png" 
              alt="Digitalizándonos" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm">
              {config.agent.description}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Contacto</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <a 
                href={`mailto:${config.contact.email}`}
                className="flex items-center space-x-2 hover:text-secondary transition-colors"
              >
                <FaEnvelope />
                <span>{config.contact.email}</span>
              </a>
              <a 
                href={config.contact.whatsapp_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-secondary transition-colors"
              >
                <FaWhatsapp />
                <span>{config.contact.phone}</span>
              </a>
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>{config.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Legal</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <button 
                onClick={() => openPolicy('privacy')}
                className="block hover:text-secondary transition-colors"
              >
                Política de privacidad
              </button>
              <button 
                onClick={() => openPolicy('terms')}
                className="block hover:text-secondary transition-colors"
              >
                Términos y condiciones
              </button>
              <button 
                onClick={() => openPolicy('cookies')}
                className="block hover:text-secondary transition-colors"
              >
                Cookies
              </button>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Síguenos</h4>
            <div className="flex space-x-4">
              {config.socials.instagram && (
                <a
                  href={config.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-secondary transition-colors"
                >
                  <FaInstagram />
                </a>
              )}
              {config.socials.linkedin && (
                <a
                  href={config.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-secondary transition-colors"
                >
                  <FaLinkedin />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Digitalizándonos. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer





