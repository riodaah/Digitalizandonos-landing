const StripPartners = () => (
  <div className="border-y border-line bg-bg-soft py-8">
    <div className="container mx-auto px-6 flex flex-col gap-4 items-center text-[14px]">
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-ink-soft">
        <span className="uppercase tracking-[0.1em] text-[12px] font-semibold">Trabajamos con</span>
        <b className="text-ink">Claude · Anthropic</b>
        <b className="text-ink">OpenAI</b>
        <b className="text-ink">Gemini · Google</b>
        <b className="text-ink">Azure AI Foundry</b>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 text-ink-soft">
        <span className="uppercase tracking-[0.1em] text-[12px] font-semibold">Integramos con</span>
        <b className="text-ink">WhatsApp Business</b>
        <b className="text-ink">Instagram</b>
        <b className="text-ink">Gmail / Outlook</b>
        <b className="text-ink">Google Calendar</b>
        <b className="text-ink">Tu CRM o ERP</b>
      </div>
    </div>
  </div>
)
export default StripPartners
