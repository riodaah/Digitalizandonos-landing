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

const PoliticasPrivacidad = () => {
  useEffect(() => {
    document.title = 'Política de Privacidad — Darmi'
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
          <h1 className="text-4xl font-bold mb-4">Política de Privacidad</h1>
          <p className="text-slate-400 text-sm">Última actualización: {LAST_UPDATED}</p>
        </div>

        <Section title="1. Responsable del tratamiento">
          <p>
            <strong className="text-white">Darmi</strong> (en adelante, "Darmi", "nosotros" o "la empresa"), con correo electrónico de contacto{' '}
            <a href="mailto:contacto@darmi.cl" className="text-primary hover:underline">contacto@darmi.cl</a> y domicilio en Santiago, Chile, es el responsable del tratamiento de los datos personales que se recopilan a través del sitio web{' '}
            <a href="https://www.darmi.cl" className="text-primary hover:underline">www.darmi.cl</a> y de las soluciones tecnológicas que desarrolla para sus clientes.
          </p>
          <p>
            Esta Política de Privacidad ha sido redactada en cumplimiento de la <strong className="text-white">Ley N° 19.628 sobre Protección de la Vida Privada</strong> (Chile) y de la <strong className="text-white">Ley N° 21.719 de Protección de Datos Personales</strong> (Chile, 2024), así como de los requisitos de privacidad exigidos por proveedores de servicios digitales como Google, Microsoft y otras plataformas de terceros.
          </p>
        </Section>

        <Section title="2. Datos personales que recopilamos">
          <p>Dependiendo del contexto en que interactúas con nosotros, podemos recopilar los siguientes datos personales:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Datos de contacto:</strong> nombre, apellido, correo electrónico, número de teléfono, empresa y cargo.</li>
            <li><strong className="text-white">Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas, duración de la visita y fuente de tráfico (mediante cookies analíticas).</li>
            <li><strong className="text-white">Datos de proyectos:</strong> información operacional, documentos, bases de datos y conversaciones que el cliente comparte con Darmi para la implementación de soluciones de automatización, agentes de IA o CRM.</li>
            <li><strong className="text-white">Datos de Google (cuando aplica):</strong> cuando el cliente autoriza el acceso a servicios de Google (p. ej. Google Calendar, Gmail, Google Sheets), recopilamos únicamente los datos estrictamente necesarios para prestar el servicio contratado, conforme a los permisos OAuth otorgados explícitamente por el usuario.</li>
          </ul>
          <p className="italic text-slate-400">No recopilamos datos sensibles (origen racial, salud, afiliación sindical, creencias religiosas u orientación sexual) a través de este sitio.</p>
        </Section>

        <Section title="3. Finalidad y base legal del tratamiento">
          <p>Tratamos tus datos para las siguientes finalidades:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Responder consultas y comunicaciones</strong> (base legal: consentimiento / interés legítimo).</li>
            <li><strong className="text-white">Prestar los servicios contratados</strong>: automatización de procesos, agentes de IA, implementación de CRM e integraciones a medida (base legal: ejecución de contrato).</li>
            <li><strong className="text-white">Mejorar nuestro sitio web</strong> mediante análisis de comportamiento de navegación (base legal: interés legítimo / consentimiento mediante cookies).</li>
            <li><strong className="text-white">Cumplir obligaciones legales y tributarias</strong> (base legal: cumplimiento legal).</li>
            <li><strong className="text-white">Enviar comunicaciones comerciales</strong> únicamente a quienes hayan otorgado su consentimiento expreso.</li>
          </ul>
        </Section>

        <Section title="4. Uso de datos de Google">
          <p>
            Cuando Darmi implementa soluciones que requieren acceso a los servicios de Google de un cliente (Google Calendar, Gmail, Drive, Sheets u otros), el acceso se realiza exclusivamente mediante la autorización OAuth del titular de la cuenta, con el alcance mínimo necesario para operar la funcionalidad acordada.
          </p>
          <p>Los datos obtenidos de los servicios de Google:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Se utilizan <strong className="text-white">solo para el propósito para el cual el cliente otorgó el acceso</strong> (p. ej. leer eventos del calendario para notificaciones automáticas).</li>
            <li><strong className="text-white">No se comparten con terceros no autorizados</strong> ni se usan para publicidad.</li>
            <li><strong className="text-white">No se usan para entrenar modelos de inteligencia artificial</strong>.</li>
            <li>Pueden ser almacenados de forma cifrada en la infraestructura de Darmi o en plataformas cloud de confianza (AWS, Azure, GCP) exclusivamente para la operación del servicio.</li>
            <li>El cliente puede revocar el acceso en cualquier momento desde su cuenta de Google en <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">myaccount.google.com/permissions</a>.</li>
          </ul>
          <p>
            Esta declaración cumple con la <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Política de Datos de Usuario de los Servicios de la API de Google</a>.
          </p>
        </Section>

        <Section title="5. Almacenamiento, seguridad y cifrado">
          <p>
            Darmi implementa medidas técnicas y organizativas adecuadas para garantizar la seguridad de los datos personales. En particular:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Cifrado en tránsito:</strong> toda la información se transmite mediante protocolos seguros (HTTPS/TLS 1.2 o superior).</li>
            <li><strong className="text-white">Cifrado en reposo:</strong> los datos almacenados en los sistemas de Darmi y en las plataformas cloud que utilizamos se mantienen cifrados.</li>
            <li><strong className="text-white">Acceso restringido:</strong> únicamente el personal autorizado de Darmi tiene acceso a los datos de los clientes, bajo obligación de confidencialidad.</li>
            <li><strong className="text-white">Infraestructura en la nube:</strong> utilizamos servicios de Amazon Web Services (AWS), Microsoft Azure y Google Cloud Platform, que cuentan con certificaciones ISO 27001, SOC 2 y otras normas internacionales de seguridad.</li>
            <li><strong className="text-white">Sin entrenamiento de modelos:</strong> los datos confidenciales de los clientes —incluyendo conversaciones, documentos y bases de datos— <strong className="text-white">jamás se usan para entrenar modelos de inteligencia artificial</strong>.</li>
          </ul>
          <p>
            En caso de una brecha de seguridad que afecte a tus datos personales, Darmi notificará a los afectados y a la autoridad competente en los plazos que establezca la ley aplicable.
          </p>
        </Section>

        <Section title="6. Transferencia de datos a terceros">
          <p>Darmi no vende ni cede datos personales a terceros. Podemos compartir datos en los siguientes casos limitados:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Proveedores de servicios:</strong> empresas que nos ayudan a operar nuestra plataforma (hosting, correo electrónico, analítica web, CRM) bajo contratos que les exigen cumplir estándares de privacidad equivalentes a los nuestros.</li>
            <li><strong className="text-white">Obligación legal:</strong> cuando así lo exija un tribunal, autoridad competente o disposición legal vigente en Chile.</li>
            <li><strong className="text-white">Consentimiento del titular:</strong> cuando el propio cliente autorice expresamente la transferencia.</li>
          </ul>
          <p>
            Los subprocesadores principales de Darmi incluyen: Google Cloud, Amazon Web Services, Microsoft Azure, Anthropic, OpenAI, Vercel y Pipedrive, todos bajo contratos de protección de datos (DPA) vigentes.
          </p>
        </Section>

        <Section title="7. Conservación de datos">
          <p>
            Los datos personales se conservan durante el tiempo necesario para cumplir la finalidad para la cual fueron recopilados, y en todo caso por el período que establezcan las obligaciones legales aplicables:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Datos de contacto de clientes activos: durante la vigencia de la relación comercial y hasta 5 años después de su término.</li>
            <li>Datos de navegación (cookies analíticas): hasta 26 meses.</li>
            <li>Registros contables: según lo exige la legislación tributaria chilena (mínimo 6 años).</li>
          </ul>
          <p>Transcurridos estos plazos, los datos se eliminan o anonomizan de forma irreversible.</p>
        </Section>

        <Section title="8. Derechos de los titulares de datos">
          <p>
            En conformidad con la Ley N° 19.628 y la Ley N° 21.719, tienes derecho a:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Acceso:</strong> conocer qué datos personales tenemos sobre ti.</li>
            <li><strong className="text-white">Rectificación:</strong> corregir datos inexactos o incompletos.</li>
            <li><strong className="text-white">Cancelación / Supresión:</strong> solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
            <li><strong className="text-white">Oposición:</strong> oponerte al tratamiento de tus datos para finalidades específicas.</li>
            <li><strong className="text-white">Portabilidad:</strong> recibir tus datos en un formato estructurado y de uso común.</li>
            <li><strong className="text-white">Revocación del consentimiento:</strong> retirar tu consentimiento en cualquier momento, sin que ello afecte la licitud del tratamiento anterior.</li>
          </ul>
          <p>
            Para ejercer cualquiera de estos derechos, escríbenos a{' '}
            <a href="mailto:contacto@darmi.cl" className="text-primary hover:underline">contacto@darmi.cl</a>{' '}
            con el asunto "Derechos ARCO" e indicando tu nombre y solicitud. Responderemos en un plazo máximo de 30 días hábiles.
          </p>
        </Section>

        <Section title="9. Cookies">
          <p>
            Nuestro sitio web utiliza cookies y tecnologías similares. Puedes consultar nuestra{' '}
            <Link to="/politicas-de-privacidad#cookies" className="text-primary hover:underline">Política de Cookies</Link>{' '}
            para más detalles. Al navegar por nuestro sitio, aceptas el uso de cookies de acuerdo con las preferencias que configures en el banner de consentimiento.
          </p>
          <p><strong className="text-white">Tipos de cookies que utilizamos:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Esenciales:</strong> necesarias para el funcionamiento básico del sitio. No requieren consentimiento.</li>
            <li><strong className="text-white">Analíticas:</strong> Google Analytics y Google Tag Manager, para entender cómo los usuarios interactúan con el sitio. Requieren consentimiento.</li>
            <li><strong className="text-white">De marketing:</strong> Google Ads, para medir conversiones. Requieren consentimiento.</li>
          </ul>
          <p>Puedes gestionar o eliminar las cookies desde la configuración de tu navegador.</p>
        </Section>

        <Section title="10. Cambios a esta política">
          <p>
            Darmi puede actualizar esta Política de Privacidad en cualquier momento. Los cambios sustanciales serán notificados mediante aviso en el sitio web o, cuando corresponda, por correo electrónico. La versión vigente es la publicada en esta página, con la fecha de última actualización indicada en el encabezado.
          </p>
        </Section>

        <Section title="11. Contacto y reclamaciones">
          <p>
            Para cualquier consulta, solicitud o reclamación relacionada con el tratamiento de tus datos personales, contáctanos en:
          </p>
          <ul className="list-none space-y-1">
            <li>📧 <a href="mailto:contacto@darmi.cl" className="text-primary hover:underline">contacto@darmi.cl</a></li>
            <li>🌐 <a href="https://www.darmi.cl" className="text-primary hover:underline">www.darmi.cl</a></li>
            <li>📍 Santiago, Chile</li>
          </ul>
          <p>
            Si consideras que el tratamiento de tus datos infringe la normativa aplicable, puedes presentar una reclamación ante el <strong className="text-white">Consejo para la Transparencia</strong> (cplt.cl) u organismo que en el futuro asuma la función de autoridad de protección de datos en Chile.
          </p>
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

export default PoliticasPrivacidad
