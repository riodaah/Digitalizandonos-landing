import { FaCogs, FaRobot, FaUsers, FaPlug } from 'react-icons/fa'
import ScrollReveal from './ScrollReveal'

const SERVICES = [
  {
    icon: <FaCogs />,
    title: 'Automatización de procesos',
    text: 'Eliminamos tareas repetitivas: correos, planillas, reportes, aprobaciones y traspaso de datos entre sistemas.',
    tags: ['n8n', 'Make', 'Python'],
  },
  {
    icon: <FaRobot />,
    title: 'Agentes de IA',
    text: 'Agentes que atienden, cotizan y agendan en WhatsApp, Instagram, web y correo, con la información de tu negocio.',
    tags: ['WhatsApp', 'Web', 'Correo'],
  },
  {
    icon: <FaUsers />,
    title: 'Implementación de CRM',
    text: 'Configuramos tu CRM, migramos tus datos, automatizamos el seguimiento de ventas y capacitamos a tu equipo.',
    tags: ['Pipedrive', 'Embudos', 'Reportes'],
  },
  {
    icon: <FaPlug />,
    title: 'Integraciones a medida',
    text: 'Conectamos tu ERP, APIs y bases de datos, y construimos dashboards o desarrollos cuando no existe una herramienta que lo resuelva.',
    tags: ['APIs', 'ERP', 'Dashboards'],
  },
]

const SectionServices = () => (
  <section id="servicios" className="py-24">
    <div className="container mx-auto px-6">
      <ScrollReveal className="text-center max-w-[640px] mx-auto">
        <span className="eyebrow">Servicios</span>
        <h2 className="text-[30px] md:text-[44px] font-bold">Lo que hacemos</h2>
        <p className="text-[17px] text-ink-soft mt-4">
          Diseñamos e implementamos soluciones a la medida de cada empresa, de principio a fin.
        </p>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 gap-6 mt-14 max-w-[980px] mx-auto">
        {SERVICES.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.08}>
            <article className="h-full bg-white border border-line rounded-[22px] p-7 shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300">
              <span className="w-12 h-12 rounded-[14px] text-white text-[20px] flex items-center justify-center"
                    style={{ background: 'linear-gradient(120deg,#0a5cff,#00c2d4)' }}>{s.icon}</span>
              <h3 className="text-[21px] font-bold mt-5">{s.title}</h3>
              <p className="text-[15.5px] text-ink-soft mt-2.5">{s.text}</p>
              <div className="flex flex-wrap gap-2 mt-5">
                {s.tags.map((t) => (
                  <span key={t} className="text-[12.5px] font-semibold text-primary-ink bg-[#eef4ff] border border-[#d8e5ff] px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
)
export default SectionServices
