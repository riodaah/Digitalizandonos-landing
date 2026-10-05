import { FaUsers, FaCheck, FaBrain, FaCogs, FaCloud, FaComments, FaChartBar, FaCode, FaEnvelope, FaDatabase } from 'react-icons/fa'
import {
  SiAnthropic, SiOpenai, SiGooglegemini, SiN8N, SiMake, SiPython, SiAmazonwebservices,
  SiGooglecloud, SiVercel, SiRailway, SiWhatsapp, SiInstagram, SiGooglecalendar,
  SiGoogleanalytics, SiGoogletagmanager, SiReact, SiWordpress, SiShopify, SiGoogleads, SiMeta,
  SiOpenapiinitiative,
} from 'react-icons/si'
import { VscAzure } from 'react-icons/vsc'
import { TbBrandTeams } from 'react-icons/tb'
import ScrollReveal from './ScrollReveal'

const PIPEDRIVE_ITEMS = [
  'Implementación y configuración de embudos de venta',
  'Migración de datos desde planillas u otros CRM',
  'Automatizaciones y workflows de seguimiento',
  'Integraciones vía API con WhatsApp, formularios, ERP y facturación',
  'Agentes de IA que crean y actualizan negocios en Pipedrive',
  'Capacitación al equipo comercial y soporte continuo',
]

const GROUPS = [
  {
    icon: <FaBrain />, title: 'Inteligencia artificial',
    tools: [
      { name: 'Anthropic · Claude', icon: <SiAnthropic /> },
      { name: 'OpenAI', icon: <SiOpenai /> },
      { name: 'Google Gemini', icon: <SiGooglegemini /> },
      { name: 'Azure AI Foundry', icon: <VscAzure /> },
    ],
  },
  {
    icon: <FaCogs />, title: 'Automatización',
    tools: [
      { name: 'n8n', icon: <SiN8N /> },
      { name: 'Make', icon: <SiMake /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'APIs REST y webhooks', icon: <SiOpenapiinitiative /> },
    ],
  },
  {
    icon: <FaCloud />, title: 'Cloud e infraestructura',
    tools: [
      { name: 'Amazon Web Services', icon: <SiAmazonwebservices /> },
      { name: 'Microsoft Azure', icon: <VscAzure /> },
      { name: 'Google Cloud', icon: <SiGooglecloud /> },
      { name: 'Vercel', icon: <SiVercel /> },
      { name: 'Railway', icon: <SiRailway /> },
    ],
  },
  {
    icon: <FaComments />, title: 'Canales e integraciones',
    tools: [
      { name: 'WhatsApp Business API', icon: <SiWhatsapp /> },
      { name: 'Instagram', icon: <SiInstagram /> },
      { name: 'Microsoft Teams', icon: <TbBrandTeams /> },
      { name: 'Gmail y Outlook', icon: <FaEnvelope /> },
      { name: 'Google Calendar', icon: <SiGooglecalendar /> },
    ],
  },
  {
    icon: <FaChartBar />, title: 'Datos y analítica',
    tools: [
      { name: 'SQL', icon: <FaDatabase /> },
      { name: 'Power BI', icon: <FaChartBar /> },
      { name: 'Google Analytics 4', icon: <SiGoogleanalytics /> },
      { name: 'Google Tag Manager', icon: <SiGoogletagmanager /> },
    ],
  },
  {
    icon: <FaCode />, title: 'Web y marketing',
    tools: [
      { name: 'React', icon: <SiReact /> },
      { name: 'WordPress', icon: <SiWordpress /> },
      { name: 'Shopify', icon: <SiShopify /> },
      { name: 'Google Ads', icon: <SiGoogleads /> },
      { name: 'Meta Ads', icon: <SiMeta /> },
    ],
  },
]

const SectionStack = () => (
  <section id="stack" className="py-24 bg-bg-soft border-y border-line">
    <div className="container mx-auto px-6">
      <ScrollReveal className="text-center max-w-[680px] mx-auto">
        <span className="eyebrow">Stack tecnológico</span>
        <h2 className="text-[30px] md:text-[44px] font-bold">Herramientas con las que trabajamos</h2>
        <p className="text-[17px] text-ink-soft mt-4">
          Elegimos la tecnología según el problema, no al revés. Estas son las plataformas que
          usamos a diario para diseñar, integrar y operar las soluciones de nuestros clientes.
        </p>
      </ScrollReveal>

      {/* Pipedrive destacado */}
      <ScrollReveal className="max-w-[1080px] mx-auto mt-14">
        <article id="pipedrive" className="link-target relative overflow-hidden bg-white border border-line rounded-[26px] shadow-card p-8 md:p-10 grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-center">
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg,#0a5cff,#00c2d4)' }} />
          <div>
            <span className="w-14 h-14 rounded-[16px] text-white text-[24px] flex items-center justify-center"
                  style={{ background: 'linear-gradient(120deg,#0a5cff,#00c2d4)' }}><FaUsers /></span>
            <span className="block mt-5 text-[12.5px] font-semibold tracking-[0.12em] uppercase text-primary">CRM de cabecera</span>
            <h3 className="text-[28px] md:text-[34px] font-extrabold mt-1">Pipedrive CRM</h3>
            <p className="text-[16px] text-ink-soft mt-3">
              Es el CRM que implementamos y recomendamos a nuestros clientes. Lo dejamos
              configurado, integrado con sus canales y sistemas, y potenciado con automatización e IA
              para que el equipo comercial venda más y registre menos.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3.5">
            {PIPEDRIVE_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-[15px] text-ink">
                <span className="mt-1 w-5 h-5 shrink-0 rounded-full bg-[#eef4ff] text-primary text-[10px] flex items-center justify-center"><FaCheck /></span>
                {item}
              </li>
            ))}
          </ul>
        </article>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 max-w-[1080px] mx-auto">
        {GROUPS.map((g, i) => (
          <ScrollReveal key={g.title} delay={(i % 3) * 0.08}>
            <article className="h-full bg-white border border-line rounded-[22px] p-6">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-[12px] bg-[#eef4ff] text-primary text-[17px] flex items-center justify-center">{g.icon}</span>
                <h3 className="text-[18px] font-bold">{g.title}</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {g.tools.map((t) => (
                  <li key={t.name} className="flex items-center gap-3 text-[15px] text-ink">
                    <span className="w-5 text-[18px] text-ink-soft flex justify-center" aria-hidden="true">{t.icon}</span>
                    {t.name}
                  </li>
                ))}
              </ul>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
)
export default SectionStack
