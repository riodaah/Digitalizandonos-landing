const TOOLS = ['OpenAI', 'Claude', 'Gemini', 'Pipedrive', 'n8n', 'Make', 'WhatsApp Business']

const StripPartners = () => (
  <div className="border-y border-line bg-bg-soft py-4">
    <div className="container mx-auto px-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-[14px] text-ink-soft">
      <span className="uppercase tracking-[0.1em] text-[12px] font-semibold">Trabajamos con</span>
      {TOOLS.map((item) => (
        <b key={item} className="text-ink">{item}</b>
      ))}
    </div>
  </div>
)
export default StripPartners
