import { motion, useScroll, useTransform } from 'framer-motion'
import { FaClock, FaCalendarAlt, FaRocket } from 'react-icons/fa'
import { useRef } from 'react'
import ScrollReveal from './ScrollReveal'

// Componente de rayos de luz energéticos centrados
const LightBeams = ({ target }) => {
  const { scrollYProgress } = useScroll({ 
    target, 
    offset: ["start end", "end start"] 
  });

  // Opacidad general que aparece/desaparece con el scroll
  const mainOpacity = useTransform(
    scrollYProgress, 
    [0, 0.2, 0.5, 0.8, 1], 
    [0, 1, 1, 1, 0]
  );
  
  // Movimiento sutil para los gradientes
  const y1 = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["15%", "-15%"]);
  
  // Rotación sutil para dinamismo
  const rotate1 = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [5, -5]);
  
  // Opacidades de colores que cambian
  const purpleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 0.8, 0.4, 0.6]);
  const goldOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.5, 0.9, 0.4]);
  const blueOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.4, 0.6, 0.7, 0.5]);

  return (
    <>
      {/* Contenedor con opacidad global */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ opacity: mainOpacity }}
      >
        {/* Gradientes radiales centrados en el video - Morado */}
        <motion.div
          className="absolute w-[600px] h-[600px]"
          style={{ 
            y: y1,
            rotate: rotate1,
            opacity: purpleOpacity
          }}
        >
          <div className="w-full h-full bg-gradient-radial from-[#8b5cf6]/30 via-[#8b5cf6]/10 to-transparent blur-[100px]" />
        </motion.div>
        
        {/* Gradiente dorado */}
        <motion.div
          className="absolute w-[550px] h-[550px]"
          style={{ 
            y: y2,
            rotate: rotate2,
            opacity: goldOpacity
          }}
        >
          <div className="w-full h-full bg-gradient-radial from-[#ffb703]/25 via-[#ffb703]/8 to-transparent blur-[100px]" />
        </motion.div>
        
        {/* Gradiente azul */}
        <motion.div
          className="absolute w-[580px] h-[580px]"
          style={{ 
            y: y1,
            rotate: rotate1,
            opacity: blueOpacity
          }}
        >
          <div className="w-full h-full bg-gradient-radial from-[#2563eb]/20 via-[#2563eb]/8 to-transparent blur-[100px]" />
        </motion.div>
      </motion.div>
      
      {/* Partículas de energía flotantes con opacidad sincronizada */}
      <motion.div
        className="absolute left-1/2 -ml-32 top-1/4 w-2 h-2 bg-[#ffb703] rounded-full blur-sm pointer-events-none"
        style={{ opacity: mainOpacity }}
        animate={{
          y: [0, -20, 0],
          x: [0, 5, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute left-1/2 ml-32 top-1/2 w-2 h-2 bg-[#8b5cf6] rounded-full blur-sm pointer-events-none"
        style={{ opacity: mainOpacity }}
        animate={{
          y: [0, 25, 0],
          x: [0, -5, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute left-1/2 -ml-40 bottom-1/3 w-2.5 h-2.5 bg-[#2563eb] rounded-full blur-sm pointer-events-none"
        style={{ opacity: mainOpacity }}
        animate={{
          y: [0, -15, 0],
          x: [0, 8, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div
        className="absolute left-1/2 ml-36 top-1/3 w-1.5 h-1.5 bg-[#ffb703] rounded-full blur-sm pointer-events-none"
        style={{ opacity: mainOpacity }}
        animate={{
          y: [0, -25, 0],
          x: [0, -8, 0],
          scale: [1, 1.4, 1]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
    </>
  );
};

const SectionAgents = () => {
  const targetRef = useRef(null);
  
  const features = [
    {
      icon: <FaClock className="text-5xl" />,
      title: 'Atiende 24/7',
      description: 'Tu agente nunca duerme. Responde a tus clientes en cualquier momento.',
    },
    {
      icon: <FaCalendarAlt className="text-5xl" />,
      title: 'Agenda automáticamente',
      description: 'Integración con Google Calendar. Reservas sin intervención humana.',
    },
    {
      icon: <FaRocket className="text-5xl" />,
      title: 'Integrado a tu negocio',
      description: 'WhatsApp, Telegram, y más. Todo conectado en tiempo real.',
    },
  ]

  return (
    <section id="agentes" className="relative py-32 overflow-hidden">
      {/* Background Animation */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Agentes Virtuales <span className="gradient-text">Inteligentes</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Creamos agentes virtuales personalizados que atienden a tus clientes, 
              agendan citas, responden consultas y notifican en tiempo real. 
              Integraciones con WhatsApp, Telegram, Google Calendar y más.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-effect rounded-2xl p-8 text-center space-y-4 hover:glow transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-secondary inline-block"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Video Demo Vertical con Rayos de Luz */}
        <section ref={targetRef} className="relative overflow-hidden py-24">
          <LightBeams target={targetRef} />
          <div className="relative z-10 flex justify-center">
            <div className="glass-effect rounded-2xl p-8 glow max-w-sm">
              <div className="aspect-[9/16] rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
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
                  <source src="/videos/video2.mp4" type="video/mp4" />
                </video>
                {/* Fallback placeholder */}
                <div className="w-full h-full flex items-center justify-center" style={{display: 'none'}}>
                  <div className="text-center space-y-4 px-4">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-7xl"
                    >
                      💬
                    </motion.div>
                    <p className="text-gray-400">
                      Coloca video2.mp4 (vertical) en /public/videos/
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default SectionAgents



