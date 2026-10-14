import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const LAST_UPDATED = '14 de octubre de 2025'

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-white mb-4">{title}</h2>
    <div className="space-y-3 text-slate-300 leading-relaxed text-[15px]">{children}</div>
  </div>
)

const TerminosCondiciones = () => {
  useEffect(() => {
    document.title = 'Términos y Condiciones — Darmi'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#060a12] text-white">
      {/* Mini navbar */}
      <nav className="sticky top-0 z-50 bg-[#060a12]/90 backdrop-blur border-b border-white/10 px-6 py-4">
        <div className="container mx-auto flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm">
            <FaArrowLeft /> Volver al inicio
          </Link>
          <span className="text-white/20">|</span>
          <Link to="/" className="flex items-center gap-2">
            <img src="/Images/Logo oficial hd.png" alt="Darmi" className="h-8 w-auto" />
            <span className="font-display font-extrabold text-[20px] text-white">Darmi</span>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-16 max-w-3xl">
        <div className="mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl font-bold mb-4">Términos y Condiciones</h1>
          <p className="text-slate-400 text-sm">Última actualización: {LAST_UPDATED}</p>
        </div>

        <Section title="1. Identificación y aceptación">
          <p>
            Los presentes Términos y Condiciones (en adelante, "los Términos") regulan el acceso y uso del sitio web{' '}
            <a href="https://www.darmi.cl" className="text-primary hover:underline">www.darmi.cl</a> y los servicios ofrecidos por <strong className="text-white">Darmi</strong>, empresa con domicilio en Santiago, Chile (en adelante, "Darmi", "nosotros" o "la empresa").
          </p>
          <p>
            Al acceder o utilizar este sitio web o contratar cualquiera de nuestros servicios, el usuario o cliente (en adelante, "el Cliente") acepta en su totalidad los presentes Términos. Si no estás de acuerdo con alguna de las disposiciones aquí contenidas, te pedimos que no utilices el sitio ni contraten nuestros servicios.
          </p>
        </Section>

        <Section title="2. Descripción de servicios">
          <p>Darmi es una agencia especializada en inteligencia artificial aplicada a procesos empresariales. Nuestros servicios incluyen, sin limitarse a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Automatización de procesos:</strong> diseño e implementación de flujos automatizados con herramientas como n8n, Make, Python y APIs REST.</li>
            <li><strong className="text-white">Agentes de inteligencia artificial:</strong> desarrollo e implementación de agentes conversacionales y de proceso para WhatsApp, Instagram, correo electrónico, sitios web y plataformas internas.</li>
            <li><strong className="text-white">Implementación de CRM:</strong> configuración, migración de datos, automatizaciones e integraciones del CRM Pipedrive, incluyendo integraciones personalizadas vía API.</li>
            <li><strong className="text-white">Integraciones a medida:</strong> conexión entre sistemas ERP, bases de datos, APIs externas y plataformas de terceros.</li>
            <li><strong className="text-white">Soporte y mantención:</strong> servicio de acompañamiento, monitoreo y mejora continua de las soluciones implementadas.</li>
          </ul>
          <p>Las condiciones específicas de cada servicio (alcance, plazos, entregables y precio) se definen en la propuesta comercial o contrato firmado entre Darmi y el Cliente.</p>
        </Section>

        <Section title="3. Uso del sitio web">
          <p>El usuario se compromete a utilizar el sitio web de conformidad con la ley, la moral y las buenas costumbres, y en particular a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>No utilizar el sitio con fines fraudulentos o ilegales.</li>
            <li>No introducir o difundir contenidos que sean falsos, difamatorios, obscenos o que infrinjan derechos de terceros.</li>
            <li>No intentar acceder a sistemas o información de Darmi o de terceros sin autorización.</li>
            <li>No reproducir, distribuir ni modificar los contenidos del sitio sin autorización expresa de Darmi.</li>
          </ul>
          <p>
            Darmi se reserva el derecho de denegar el acceso al sitio o a sus servicios a cualquier usuario que incumpla estas condiciones, sin necesidad de previo aviso.
          </p>
        </Section>

        <Section title="4. Condiciones comerciales y de pago">
          <p>
            Los precios, modalidad de pago, plazos de entrega y condiciones de cancelación de cada servicio se determinan en la propuesta o contrato específico celebrado con cada cliente. En general:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Los presupuestos tienen una vigencia de <strong className="text-white">15 días corridos</strong> desde su emisión, salvo indicación distinta.</li>
            <li>El inicio del proyecto queda sujeto al pago del anticipo acordado.</li>
            <li>Darmi emite documentos tributarios electrónicos (boleta/factura) en pesos chilenos (CLP) o en la moneda acordada.</li>
            <li>Los servicios de mantención mensual se facturan de forma anticipada.</li>
          </ul>
        </Section>

        <Section title="5. Propiedad intelectual">
          <p>
            <strong className="text-white">Contenidos de Darmi:</strong> todos los contenidos del sitio web (textos, imágenes, diseño, código, logos y marca) son propiedad de Darmi o de sus licenciantes y están protegidos por las leyes de propiedad intelectual chilenas e internacionales. Queda prohibida su reproducción total o parcial sin autorización escrita.
          </p>
          <p>
            <strong className="text-white">Desarrollos a medida:</strong> la titularidad del código fuente, integraciones y configuraciones desarrolladas específicamente para un cliente se rige por lo acordado en el contrato de servicios. Salvo pacto en contrario, Darmi puede reutilizar componentes genéricos (módulos, librerías, plantillas) en otros proyectos.
          </p>
          <p>
            <strong className="text-white">Marca y nombre comercial:</strong> "Darmi" y sus variaciones son marcas de uso comercial de la empresa. No se otorga ninguna licencia de uso de la marca al Cliente, salvo autorización expresa por escrito.
          </p>
        </Section>

        <Section title="6. Confidencialidad">
          <p>
            Darmi se compromete a mantener la confidencialidad de toda la información que el Cliente comparta durante la prestación de servicios, incluyendo datos operativos, estratégicos, financieros y de clientes finales.
          </p>
          <p>
            Esta obligación de confidencialidad se extiende al personal de Darmi y a los subcontratistas que puedan intervenir en el proyecto, quienes firmarán acuerdos de confidencialidad (NDA) cuando así se requiera.
          </p>
          <p>
            La obligación de confidencialidad permanece vigente durante la relación contractual y por un período de <strong className="text-white">3 años</strong> posterior a su término, salvo que se acuerde un plazo mayor en el contrato específico.
          </p>
        </Section>

        <Section title="7. Protección de datos personales">
          <p>
            El tratamiento de datos personales realizado por Darmi en el marco de la prestación de servicios se rige por la{' '}
            <Link to="/politicas-de-privacidad" className="text-primary hover:underline">Política de Privacidad</Link>{' '}
            disponible en <strong className="text-white">darmi.cl/politicas-de-privacidad</strong>, la cual forma parte integrante de estos Términos.
          </p>
          <p>
            Cuando Darmi actúa como encargado del tratamiento de datos de los clientes finales del Cliente, las partes suscribirán un Acuerdo de Procesamiento de Datos (DPA) que regulará las obligaciones y responsabilidades de cada parte en conformidad con la Ley N° 21.719 y, cuando corresponda, con el GDPR europeo.
          </p>
        </Section>

        <Section title="8. Limitación de responsabilidad">
          <p>
            En la máxima medida permitida por la ley, la responsabilidad total de Darmi frente al Cliente por daños y perjuicios derivados del incumplimiento de estos Términos o de los servicios prestados estará limitada al monto total pagado por el Cliente en los <strong className="text-white">últimos 3 meses</strong> anteriores al evento que origina la reclamación.
          </p>
          <p>
            Darmi no será responsable por daños indirectos, lucro cesante, pérdida de datos, daños reputacionales ni pérdidas derivadas del uso o la imposibilidad de uso de los servicios, siempre que dichos daños no sean consecuencia de dolo o culpa grave de Darmi.
          </p>
          <p>
            Darmi no garantiza la disponibilidad ininterrumpida del sitio web ni de las soluciones implementadas, dado que éstas pueden depender de proveedores de terceros (plataformas cloud, APIs externas, etc.) sobre los cuales Darmi no tiene control directo.
          </p>
        </Section>

        <Section title="9. Garantía de servicio">
          <p>
            Darmi garantiza que los servicios serán prestados con profesionalismo, diligencia y las mejores prácticas del sector. En caso de detectar un defecto o error en un entregable dentro del período de garantía acordado (habitualmente 30 días desde la entrega), Darmi lo corregirá sin costo adicional.
          </p>
          <p>
            Las garantías no cubren deficiencias derivadas del uso incorrecto de las soluciones por parte del Cliente, modificaciones no autorizadas realizadas por el Cliente o terceros, ni cambios en plataformas de terceros (actualizaciones de APIs, cambios de interfaz, etc.).
          </p>
        </Section>

        <Section title="10. Ley aplicable y resolución de disputas">
          <p>
            Estos Términos se rigen por las leyes de la <strong className="text-white">República de Chile</strong>. Cualquier controversia derivada de su interpretación o aplicación será sometida, en primera instancia, a un proceso de mediación entre las partes. Si no se alcanza acuerdo en un plazo de 30 días, la disputa se resolverá ante los <strong className="text-white">Tribunales Ordinarios de Justicia de Santiago, Chile</strong>, con renuncia expresa a cualquier otro fuero.
          </p>
        </Section>

        <Section title="11. Modificaciones">
          <p>
            Darmi se reserva el derecho de modificar estos Términos en cualquier momento. Los cambios entran en vigencia desde su publicación en este sitio. Para servicios contratados, los cambios que afecten materialmente las condiciones acordadas requerirán notificación previa al Cliente con al menos <strong className="text-white">15 días de anticipación</strong>.
          </p>
          <p>
            El uso continuado del sitio o de los servicios después de la publicación de los cambios implica la aceptación de los nuevos Términos.
          </p>
        </Section>

        <Section title="12. Contacto">
          <p>Para consultas relacionadas con estos Términos y Condiciones:</p>
          <ul className="list-none space-y-1">
            <li>📧 <a href="mailto:contacto@darmi.cl" className="text-primary hover:underline">contacto@darmi.cl</a></li>
            <li>🌐 <a href="https://www.darmi.cl" className="text-primary hover:underline">www.darmi.cl</a></li>
            <li>📍 Santiago, Chile</li>
          </ul>
        </Section>
      </main>

      {/* Footer simple */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Darmi · <a href="https://www.darmi.cl" className="hover:text-slate-300 transition-colors">darmi.cl</a></p>
        <div className="flex justify-center gap-4 mt-2">
          <Link to="/politicas-de-privacidad" className="hover:text-slate-300 transition-colors">Política de Privacidad</Link>
          <span>·</span>
          <Link to="/terminos-y-condiciones" className="hover:text-slate-300 transition-colors">Términos y Condiciones</Link>
        </div>
      </footer>
    </div>
  )
}

export default TerminosCondiciones
