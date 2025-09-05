import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NakshatraSection from './components/NakshatraSection'
import ModernWorkspace from './components/Modernworkspace/ModernWorkspace'
import PremiumFacilities from './components/PremiumFacilities/PremiumFacilities'
import { TestimonialsSection } from './components/TestimonialsSection/TestimonialsSection'
import ViabilityMetrics from './components/ViabilityMetrics/ViabilityMetrics'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
      <NakshatraSection />
       <ModernWorkspace />
       <ViabilityMetrics />
         <PremiumFacilities />
         <TestimonialsSection />
    </div>
  )
}

export default App
