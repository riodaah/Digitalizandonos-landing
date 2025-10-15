import { motion } from 'framer-motion'
import { FaInstagram, FaGoogle, FaVideo, FaBullhorn } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'

const SectionMarketing = () => {
  const services = [
    {
      icon: <FaInstagram className="text-4xl" />,
      title: 'Gestión de redes',
      description: 'Historias diarias y contenido estratégico',
    },
    {
      icon: <FaVideo className="text-4xl" />,
      title: 'Reels profesionales',
      description: 'Contenido viral cada semana',
    },
    {
      icon: <FaGoogle className="text-4xl" />,
      title: 'Campañas pagadas',
      description: 'Google Ads y Meta con 20% fee',
    },
    {
      icon: <FaBullhorn className="text-4xl" />,
      title: 'Producción de contenido',
      description: 'Sesiones profesionales con tu equipo',
    },
  ]

  return (
    <section id="marketing" className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <motion.div
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">¿Y con quién hablará tu agente</span>
              <br />si no tienes nuevos clientes?
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <p className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Te ayudamos a crecer en Instagram y Meta.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Publicamos historias todos los días, creamos reels semanales y gestionamos 
              tus campañas de Google Ads y Meta con transparencia total.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-effect rounded-xl p-6 text-center space-y-4 hover:glow transition-all duration-300"
              >
                <div className="text-primary inline-block">{service.icon}</div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Team Photo & Video Section */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Team Photo */}
          <ScrollReveal>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-2xl p-4 overflow-hidden"
            >
              <img
                src="/Images/equipo.png"
                alt="Equipo Digitalizándonos"
                className="rounded-xl w-full h-full object-cover"
              />
            </motion.div>
          </ScrollReveal>

          {/* Video */}
          <ScrollReveal delay={0.2}>
            <div className="glass-effect rounded-2xl p-8 flex items-center justify-center h-full">
              <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-secondary/20 to-primary/20 w-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                >
                  <source src="/videos/video3.mp4" type="video/mp4" />
                </video>
                {/* Fallback placeholder */}
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center space-y-4">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="text-7xl"
                    >
                      🎬
                    </motion.div>
                    <p className="text-gray-400">
                      Coloca video3.mp4 en /public/videos/
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default SectionMarketing



