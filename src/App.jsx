import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroFlow from './components/HeroFlow'
import StripPartners from './components/StripPartners'
import SectionClients from './components/SectionClients'
import SectionServices from './components/SectionServices'
import SectionStack from './components/SectionStack'
import SectionProcess from './components/SectionProcess'
import SectionAbout from './components/SectionAbout'
import SectionContact from './components/SectionContact'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import PoliticasPrivacidad from './pages/PoliticasPrivacidad'
import TerminosCondiciones from './pages/TerminosCondiciones'
import IAParaEmpresas from './pages/IAParaEmpresas'
import { captureAttribution } from './lib/lead'

function HomePage() {
  return (
    <div className="relative min-h-screen bg-white text-ink">
      <Navbar />
      <main>
        <HeroFlow />
        <StripPartners />
        <SectionClients />
        <SectionServices />
        <SectionStack />
        <SectionProcess />
        <SectionAbout />
        <SectionContact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  useEffect(() => { captureAttribution() }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ia-para-empresas" element={<IAParaEmpresas />} />
        <Route path="/politicas-de-privacidad" element={<PoliticasPrivacidad />} />
        <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />
      </Routes>
      <CookieBanner />
    </>
  )
}

export default App
