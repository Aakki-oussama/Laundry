import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import './App.css'

// Shared components
import Loader from './site/components/shares/Loader'
import Navbar from './site/components/shares/header'
import Footer from './site/components/shares/footer'

// Unique components
import Hero from './site/components/unique/Hero'
import StorySection from './site/components/unique/StorSection'
import StatsSection from './site/components/unique/StatsSection'
import TrustSection from './site/components/unique/TrustSection'
import ProcessSection from './site/components/unique/ProcessSection'
import ServicesSection from './site/components/unique/ServiceSection'
import CTASection from './site/components/unique/CTASection'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading completion
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader />}
      </AnimatePresence>
      
      <div className="min-h-screen bg-brand-cream">
        <Navbar />
        
        <main>
          <Hero />
          <StorySection />
          <StatsSection />
          <TrustSection />
          <ProcessSection />
          <ServicesSection />
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default App
