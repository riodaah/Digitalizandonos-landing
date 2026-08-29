import ScrollReveal from './ScrollReveal'

const SectionChannels = () => (
  <section id="canales" className="py-24 text-center">
    <div className="container mx-auto px-6">
      <ScrollReveal>
        <span className="eyebrow">Omnicanal</span>
        <h2 className="text-[30px] md:text-[44px] font-bold">Un solo agente. Todos tus canales.</h2>
        <p className="text-[17px] md:text-[18px] text-ink-soft max-w-[640px] mx-auto mt-4">
          Tu agente conversa donde están tus clientes y ejecuta acciones reales en tus sistemas:
          no es un chatbot de respuestas enlatadas.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <div className="mt-14 flex justify-center">
          <svg className="w-full max-w-[860px]" viewBox="0 0 860 420" role="img"
               aria-label="El agente IA conecta WhatsApp, Instagram y correo con CRM, calendario, cotizaciones y documentos">
            <defs>
              <linearGradient id="gAg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#0a5cff" /><stop offset="1" stopColor="#00c2d4" />
              </linearGradient>
            </defs>
            <g stroke="#d8e2f0" strokeWidth="2" fill="none">
              <path d="M170 90 C 280 90, 320 170, 400 195" />
              <path d="M150 210 C 260 210, 300 210, 395 210" />
              <path d="M170 330 C 280 330, 320 250, 400 225" />
              <path d="M460 195 C 540 170, 580 90, 690 90" />
              <path d="M465 210 C 560 210, 600 150, 690 165" />
              <path d="M465 215 C 560 220, 600 270, 690 255" />
              <path d="M460 225 C 540 250, 580 330, 690 330" />
            </g>
            <circle cx="430" cy="210" r="64" fill="url(#gAg)" />
            <text x="430" y="203" textAnchor="middle" fill="#fff" fontSize="15" fontWeight="700">Agente IA</text>
            <text x="430" y="223" textAnchor="middle" fill="#dbeaff" fontSize="11">24/7 · tu marca</text>
            <g fontSize="13" fontWeight="600" fill="#0e1726">
              <rect x="60" y="65" width="120" height="48" rx="14" fill="#fff" stroke="#e6eaf1" />
              <text x="120" y="93" textAnchor="middle">WhatsApp</text>
              <rect x="40" y="186" width="120" height="48" rx="14" fill="#fff" stroke="#e6eaf1" />
              <text x="100" y="214" textAnchor="middle">Instagram</text>
              <rect x="60" y="306" width="120" height="48" rx="14" fill="#fff" stroke="#e6eaf1" />
              <text x="120" y="334" textAnchor="middle">Correo</text>
            </g>
            <g fontSize="13" fontWeight="600" fill="#0e1726">
              <rect x="680" y="65" width="150" height="48" rx="14" fill="#fff" stroke="#e6eaf1" />
              <text x="755" y="93" textAnchor="middle">Cotizaciones PDF</text>
              <rect x="690" y="141" width="150" height="48" rx="14" fill="#fff" stroke="#e6eaf1" />
              <text x="765" y="169" textAnchor="middle">Agenda de citas</text>
              <rect x="690" y="231" width="150" height="48" rx="14" fill="#fff" stroke="#e6eaf1" />
              <text x="765" y="259" textAnchor="middle">CRM / ERP</text>
              <rect x="680" y="306" width="150" height="48" rx="14" fill="#fff" stroke="#e6eaf1" />
              <text x="755" y="334" textAnchor="middle">Tus documentos</text>
            </g>
            <text x="235" y="30" fontSize="12" fill="#4b5563" fontWeight="600" letterSpacing="1">DONDE TE ESCRIBEN</text>
            <text x="640" y="30" fontSize="12" fill="#4b5563" fontWeight="600" letterSpacing="1">LO QUE EJECUTA</text>
          </svg>
        </div>
      </ScrollReveal>
    </div>
  </section>
)
export default SectionChannels
