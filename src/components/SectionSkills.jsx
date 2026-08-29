import ScrollReveal from './ScrollReveal'
import { FaFileInvoiceDollar, FaCalendarCheck, FaUserPlus, FaBookOpen, FaMicrophone, FaHandsHelping } from 'react-icons/fa'

const skills = [
  { icon: <FaFileInvoiceDollar />, title: 'Cotizaciones en PDF',
    text: 'Genera y envía cotizaciones formales al instante, con tus precios, tu logo y numeración correlativa.' },
  { icon: <FaCalendarCheck />, title: 'Agenda de citas',
    text: 'Revisa disponibilidad real en tu calendario, agenda, confirma por correo y envía recordatorios.' },
  { icon: <FaUserPlus />, title: 'Registro en CRM / ERP',
    text: 'Cada conversación crea o actualiza el contacto y el negocio en tu sistema. Cero digitación manual.' },
  { icon: <FaBookOpen />, title: 'Responde con tus documentos',
    text: 'Lee tu catálogo, lista de precios o base de datos y responde con información exacta de tu negocio.' },
  { icon: <FaMicrophone />, title: 'Audios y voz',
    text: 'Entiende mensajes de voz de tus clientes y los procesa igual que texto. Nadie queda sin respuesta.' },
  { icon: <FaHandsHelping />, title: 'Derivación inteligente',
    text: 'Cuando la conversación necesita a un humano, deriva con todo el contexto y te avisa al momento.' },
]

const SectionSkills = () => (
  <section id="skills" className="py-24 bg-bg-soft">
    <div className="container mx-auto px-6 text-center">
      <ScrollReveal>
        <span className="eyebrow">Skills del agente</span>
        <h2 className="text-[30px] md:text-[44px] font-bold">No solo responde. Hace el trabajo.</h2>
        <p className="text-[17px] md:text-[18px] text-ink-soft max-w-[640px] mx-auto mt-4">
          Cada agente se arma con las habilidades que tu negocio necesita.
        </p>
      </ScrollReveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14 text-left">
        {skills.map((s, i) => (
          <ScrollReveal key={s.title} delay={i * 0.08}>
            <div className="group h-full bg-white border-2 border-line rounded-[20px] p-7 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-card hover:border-primary/40">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-11 h-11 shrink-0 rounded-[13px] bg-[#eef4ff] border border-[#d8e5ff] flex items-center justify-center text-primary text-[19px] transition-colors group-hover:bg-primary group-hover:text-white">
                  {s.icon}
                </div>
                <h3 className="text-[17.5px] font-semibold leading-snug">{s.title}</h3>
              </div>
              <p className="text-[14.5px] text-ink-soft">{s.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
)
export default SectionSkills
