import { motion } from 'framer-motion'
import CTAButton from './CTAButton'
import ScrollReveal from './ScrollReveal'
import config from '../config.json'

const CTAFinal = () => {
  return (
    <section id="contacto" className="relative py-32 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <motion.div
              whileInView={{ scale: [0.8, 1] }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                Deja que <span className="gradient-text">{config.agent.name}</span>
                <br />automatice tu empresa.
              </h2>
              <p className="text-2xl md:text-3xl text-gray-300">
                Agenda tu consulta gratis hoy.
              </p>
            </motion.div>

            <motion.div
              whileInView={{ y: [20, 0], opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <CTAButton text={`Habla con ${config.agent.name}`} />
            </motion.div>

            <motion.p
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-400 text-lg"
            >
              Respuesta en menos de 24 horas
            </motion.p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default CTAFinal





