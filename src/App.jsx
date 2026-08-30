import { useState } from 'react'
import Navbar from './components/Navbar'
import IntroSequence from './components/IntroSequence'
import { INTRO_STAGES } from './components/introStages'
import Hero from './components/Hero'
import StripPartners from './components/StripPartners'
import SectionChannels from './components/SectionChannels'
import SectionSkills from './components/SectionSkills'
import SectionProcess from './components/SectionProcess'
import SectionInternalAgents from './components/SectionInternalAgents'
import SectionIndustries from './components/SectionIndustries'
import SectionSecurity from './components/SectionSecurity'
import SectionPlans from './components/SectionPlans'
import SectionFAQ from './components/SectionFAQ'
import SectionAbout from './components/SectionAbout'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import PopupPolicies from './components/PopupPolicies'
import { FaWhatsapp } from 'react-icons/fa'
import config from './config.json'

function App() {
  const [showPolicy, setShowPolicy] = useState(false)
  const [policyType, setPolicyType] = useState('')
  const [introProgress, setIntroProgress] = useState(0)
  const showGlobalActions = introProgress >= INTRO_STAGES.floating

  const openPolicy = (type) => {
    setPolicyType(type)
    setShowPolicy(true)
  }

  return (
    <div className="relative min-h-screen bg-white text-ink">
      <Navbar introProgress={introProgress} />
      <IntroSequence onProgressChange={setIntroProgress} />
      <Hero />
      <StripPartners variant="partners" />
      <SectionChannels />
      <SectionSkills />
      <SectionProcess />
      <StripPartners variant="integrations" />
      <SectionInternalAgents />
      <SectionIndustries />
      <SectionSecurity />
      <SectionPlans />
      <SectionFAQ />
      <SectionAbout />
      <CTAFinal />
      <Footer openPolicy={openPolicy} />
      {showPolicy && (
        <PopupPolicies type={policyType} onClose={() => setShowPolicy(false)} />
      )}
      <a href={config.contact.whatsapp_url} target="_blank" rel="noopener noreferrer"
         aria-label="Escríbenos por WhatsApp"
         className={`fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25d366] text-white text-[26px] flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,.4)] transition-all duration-500 hover:scale-110 ${showGlobalActions ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'}`}>
        <FaWhatsapp />
      </a>
    </div>
  )
}

export default App
