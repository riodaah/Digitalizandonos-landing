import config from '../config.json'

// Envía el evento "whatsapp_click" al dataLayer para que GTM dispare
// la conversión de Google Ads (y GA4). location = qué botón se usó.
export const trackWhatsApp = (location = 'desconocido') => {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'whatsapp_click', whatsapp_location: location })
}

// Arma un enlace de WhatsApp con un mensaje propio (o el mensaje por defecto).
export const whatsAppUrl = (text) => {
  if (!text) return config.contact.whatsapp_url
  const base = config.contact.whatsapp_url.split('?')[0]
  return `${base}?text=${encodeURIComponent(text)}`
}

// Abre WhatsApp en una pestaña nueva registrando el clic.
export const openWhatsApp = (e, location, text) => {
  if (e) e.preventDefault()
  const loc = location || e?.currentTarget?.dataset?.waLocation || 'cta'
  trackWhatsApp(loc)
  window.open(whatsAppUrl(text), '_blank', 'noopener,noreferrer')
}
