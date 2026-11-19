import { useState } from 'react'
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa'
import config from '../config.json'
import { sendLead } from '../lib/lead'
import { openWhatsApp } from '../lib/whatsapp'

const FIELDS = [
  { name: 'nombre', label: 'Nombre', type: 'text', required: true, autoComplete: 'name' },
  { name: 'empresa', label: 'Empresa', type: 'text', required: true, autoComplete: 'organization' },
  { name: 'cargo', label: 'Cargo', type: 'text', required: false, autoComplete: 'organization-title' },
  { name: 'email', label: 'Correo de trabajo', type: 'email', required: true, autoComplete: 'email' },
  { name: 'telefono', label: 'Teléfono', type: 'tel', required: false, autoComplete: 'tel' },
]

const inputCls = 'w-full rounded-[12px] border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15'

const LeadForm = ({ location = 'ia_para_empresas' }) => {
  const [status, setStatus] = useState('idle') // idle | sending | done | error

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())
    setStatus('sending')
    try {
      await sendLead(data, location)
      setStatus('done')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="text-center py-10" role="status">
        <FaCheckCircle className="mx-auto text-[44px] text-primary" />
        <h3 className="text-[22px] font-bold mt-4">¡Listo! Recibimos tu solicitud</h3>
        <p className="text-[15.5px] text-ink-soft mt-2 max-w-[420px] mx-auto">
          Te escribiremos dentro de un día hábil para coordinar el horario de tu diagnóstico.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-4">
      {FIELDS.map((f) => (
        <label key={f.name} className={`block ${f.name === 'email' ? '' : ''}`}>
          <span className="text-[13.5px] font-semibold text-ink">{f.label}{f.required && ' *'}</span>
          <input name={f.name} type={f.type} required={f.required} autoComplete={f.autoComplete}
                 maxLength={160} className={`${inputCls} mt-1.5`} />
        </label>
      ))}
      {/* Campo trampa para bots */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
             className="absolute -left-[9999px] w-px h-px opacity-0" />
      <label className="block sm:col-span-2">
        <span className="text-[13.5px] font-semibold text-ink">¿Qué proceso te gustaría mejorar con IA? *</span>
        <textarea name="necesidad" required rows={4} maxLength={2000}
                  placeholder="Ej.: respondemos cotizaciones a mano y se nos pierden oportunidades"
                  className={`${inputCls} mt-1.5 resize-y`} />
      </label>
      <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4 mt-1">
        <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
          {status === 'sending' ? 'Enviando…' : 'Agendar diagnóstico gratuito'}
        </button>
        <a href={config.contact.whatsapp_url} onClick={(e) => openWhatsApp(e, `${location}_form`)}
           className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-primary-ink hover:underline">
          <FaWhatsapp /> Prefiero escribir por WhatsApp
        </a>
      </div>
      {status === 'error' && (
        <p className="sm:col-span-2 text-[14px] text-red-600" role="alert">
          No pudimos enviar el formulario. Inténtalo de nuevo o escríbenos a {config.contact.email}.
        </p>
      )}
      <p className="sm:col-span-2 text-[12.5px] text-ink-soft">
        Usamos tus datos solo para contactarte por esta solicitud. Sin costo ni compromiso.
      </p>
    </form>
  )
}

export default LeadForm
