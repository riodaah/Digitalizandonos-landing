// Envío del formulario de diagnóstico y atribución de campañas.
const LEAD_ENDPOINT = 'https://n8n-production-8bea.up.railway.app/webhook/darmi-lead'

// Guarda gclid / utm de la URL de llegada para adjuntarlos al lead.
export const captureAttribution = () => {
  if (typeof window === 'undefined') return
  try {
    const params = new URLSearchParams(window.location.search)
    const keys = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term']
    const found = {}
    keys.forEach((k) => { if (params.get(k)) found[k] = params.get(k) })
    if (Object.keys(found).length) sessionStorage.setItem('darmi_attr', JSON.stringify(found))
  } catch { /* sin storage */ }
}

const readAttribution = () => {
  try { return JSON.parse(sessionStorage.getItem('darmi_attr') || '{}') } catch { return {} }
}

export const sendLead = async (data, location = 'formulario') => {
  const attr = readAttribution()
  const origen = [location, attr.utm_source, attr.utm_campaign, attr.utm_term].filter(Boolean).join(' · ')
  const res = await fetch(LEAD_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, origen, gclid: attr.gclid || '' }),
  })
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'lead_form', lead_location: location })
}
