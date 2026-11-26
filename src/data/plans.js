// Planes de agentes de IA. Valores en CLP + IVA.
// Una sola fuente para las tarjetas y para la tabla de detalle.

export const PLANS = [
  {
    id: 'web',
    name: 'Web',
    audience: 'Pyme que parte con atención en su sitio',
    price: '$89.000',
    priceSuffix: '/mes',
    setup: 'Implementación $250.000',
    features: ['Burbuja de chat en tu web', 'Base de conocimiento', 'Captura de leads', '300 conversaciones al mes'],
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Recomendado',
    audience: 'Pyme que atiende por WhatsApp',
    price: '$189.000',
    priceSuffix: '/mes',
    setup: 'Implementación $490.000',
    features: ['Web + WhatsApp', 'Agenda en Google Calendar', 'Derivación a humano y panel', '1.000 conversaciones al mes'],
  },
  {
    id: 'business',
    name: 'Business',
    audience: 'Empresa con equipo de ventas y volumen',
    price: '$390.000',
    priceSuffix: '/mes',
    setup: 'Implementación desde $990.000',
    features: ['Multicanal + CRM Pipedrive', 'Cotizaciones en PDF', '1 herramienta a medida', 'Reporte mensual', '3.000 conversaciones al mes'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    audience: 'Operaciones complejas con ERP y alto volumen',
    pricePrefix: 'desde',
    price: '$690.000',
    priceSuffix: '/mes',
    setup: 'Implementación a cotizar',
    features: ['Integración con ERP', 'Alto volumen', 'SLA de servicio', 'Arquitectura a medida'],
  },
]

// true = Sí, false = No, string = texto. Orden de valores: web, pro, business, enterprise.
const LIMIT = 'Sigue respondiendo y el exceso se cobra (o se detiene, si lo activas)'

export const DETAIL_GROUPS = [
  {
    title: 'Plan',
    rows: [
      { label: 'Para quién', values: PLANS.map((p) => p.audience) },
      { label: 'Conversaciones al mes', values: ['300', '1.000', '3.000', 'Alto volumen, a medida'] },
      { label: 'Al pasar el límite', values: [LIMIT, LIMIT, LIMIT, LIMIT] },
      { label: 'Avisos al 80 % y 100 %', values: [true, true, true, true] },
    ],
  },
  {
    title: 'Canales e inteligencia',
    rows: [
      { label: 'Canales', values: ['Burbuja web', 'WhatsApp + burbuja', 'WhatsApp + burbuja (varios números)', 'Todos los canales que necesites'] },
      { label: 'Agentes', values: ['1', 'Hasta 3', 'Hasta 10', 'A medida'] },
      { label: 'Modelo de IA sugerido', values: ['GPT-4o mini', 'GPT-4o mini', 'GPT-4o', 'A elección según el caso'] },
      { label: 'Base de conocimiento (PDF, Excel)', values: [true, true, true, true] },
      { label: 'Tus agentes (texto y voz)', values: [true, true, true, true] },
    ],
  },
  {
    title: 'Integraciones',
    rows: [
      { label: 'Agenda con Google Calendar', values: [false, true, 'Sí, un calendario por agente', 'Sí, un calendario por agente'] },
      { label: 'Odoo / MCP (ERP, CRM, Trello…)', values: [false, false, true, 'Sí, integración ERP a medida'] },
    ],
  },
  {
    title: 'Operación y cumplimiento',
    rows: [
      { label: 'Monitor y modo humano', values: [true, true, true, true] },
      { label: 'App Android con avisos', values: [true, true, true, true] },
      { label: 'Alertas de caída', values: [true, true, true, true] },
      { label: 'Ley 21.719 (aviso, exportar, borrar)', values: [true, true, true, true] },
      { label: 'SLA de servicio', values: [false, false, false, true] },
    ],
  },
]
