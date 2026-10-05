import config from '../config.json'

// Abre WhatsApp registrando la conversión de Google Ads si está disponible.
export const openWhatsApp = (e) => {
  if (e) e.preventDefault()
  const url = config.contact.whatsapp_url
  if (typeof window !== 'undefined' && window.gtag_report_conversion) {
    window.gtag_report_conversion(url)
  } else {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}
