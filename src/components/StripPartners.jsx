const PARTNERS = ['Claude · Anthropic', 'OpenAI', 'Gemini · Google', 'Azure AI Foundry']
const INTEGRATIONS = ['WhatsApp Business', 'Instagram', 'Gmail / Outlook', 'Google Calendar', 'Tu CRM o ERP']

const StripPartners = ({ variant = 'partners' }) => {
  const isPartners = variant === 'partners'
  const title = isPartners ? 'Trabajamos con' : 'Integramos con'
  const items = isPartners ? PARTNERS : INTEGRATIONS

  return (
    <div className={`border-y border-line bg-bg-soft ${isPartners ? 'py-3.5' : 'py-4.5'}`}>
      <div className="container mx-auto px-6 flex justify-center items-center text-[14px]">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-ink-soft">
          <span className="uppercase tracking-[0.1em] text-[12px] font-semibold">{title}</span>
          {items.map((item) => (
            <b key={item} className="text-ink">{item}</b>
          ))}
        </div>
      </div>
    </div>
  )
}
export default StripPartners
