import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SectionAgents from './components/SectionAgents'
import SectionMarketing from './components/SectionMarketing'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import PopupPolicies from './components/PopupPolicies'

function App() {
  const [showPolicy, setShowPolicy] = useState(false)
  const [policyType, setPolicyType] = useState('')

  const openPolicy = (type) => {
    setPolicyType(type)
    setShowPolicy(true)
  }

  return (
    <div className="relative min-h-screen gradient-bg">
      <Navbar />
      <Hero />
      <SectionAgents />
      <SectionMarketing />
      <CTAFinal />
      <Footer openPolicy={openPolicy} />
      {showPolicy && (
        <PopupPolicies 
          type={policyType} 
          onClose={() => setShowPolicy(false)} 
        />
      )}
    </div>
  )
}

export default App





