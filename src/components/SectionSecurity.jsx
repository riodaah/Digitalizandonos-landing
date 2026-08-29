import ScrollReveal from './ScrollReveal'
import { FaShieldAlt, FaLock, FaUserSecret } from 'react-icons/fa'

const SectionSecurity = () => (
  <section className="py-20 bg-bg-soft">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[28px] px-8 py-12 md:px-14 md:py-14 text-white"
             style={{ background: 'linear-gradient(135deg,#08234f 0%,#0a5cff 80%,#00c2d4 140%)' }}>
          <div className="absolute -top-24 -right-16 w-[380px] h-[380px] rounded-full bg-white/5" />
          <div className="relative grid md:grid-cols-[auto_1fr] gap-8 items-center">
            <div className="w-20 h-20 rounded-[22px] bg-white/10 border border-white/20 flex items-center justify-center text-[34px] mx-auto md:mx-0">
              <FaShieldAlt />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-[26px] md:text-[34px] font-bold text-white">Tus datos son tuyos. Punto.</h2>
              <p className="text-white/85 text-[16px] mt-3 max-w-[640px]">
                Jamás entrenamos modelos de IA con tu información confidencial ni la de tus clientes.
                Tus conversaciones, documentos y bases de datos se usan únicamente para que tu agente
                haga su trabajo — nada más.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-7 gap-y-2 mt-5 text-[14px] text-white/90 font-medium">
                <span className="flex items-center gap-2"><FaLock /> Información cifrada</span>
                <span className="flex items-center gap-2"><FaUserSecret /> Confidencialidad por contrato</span>
                <span className="flex items-center gap-2"><FaShieldAlt /> Tú controlas tus accesos</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
)
export default SectionSecurity
