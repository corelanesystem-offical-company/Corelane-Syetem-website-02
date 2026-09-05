import { Helmet } from 'react-helmet-async'
import HeroSection from '@/components/sections/home/HeroSection'
import TrustSection from '@/components/sections/home/TrustSection'
import BusinessProblemsSection from '@/components/sections/home/BusinessProblemsSection'
import ServicesSection from '@/components/sections/home/ServicesSection'
import SolutionsSection from '@/components/sections/home/SolutionsSection'
import TechnicalCapabilitySection from '@/components/sections/home/TechnicalCapabilitySection'
import IndustriesSection from '@/components/sections/home/IndustriesSection'
import ProcessSection from '@/components/sections/home/ProcessSection'
import WhyCorelaneSection from '@/components/sections/home/WhyCorelaneSection'
import FinalCTASection from '@/components/sections/home/FinalCTASection'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Corelane Systems | Enterprise Software & Cloud Engineering</title>
        <meta
          name="description"
          content="Corelane Systems builds custom software, robust cloud infrastructure, and business automation solutions that help companies operate and scale."
        />
        <link rel="canonical" href="https://corelanesystems.com/" />
      </Helmet>

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Trust / Value Proposition */}
      <TrustSection />

      {/* 3. Business Problems vs Our Approach */}
      <BusinessProblemsSection />

      {/* 4. Core Services */}
      <ServicesSection />

      {/* 5. Solutions / What We Build */}
      <SolutionsSection />

      {/* 6. Technical Capability */}
      <TechnicalCapabilitySection />

      {/* 7. Industries */}
      <IndustriesSection />

      {/* 8. Process */}
      <ProcessSection />

      {/* 9. Why Corelane */}
      <WhyCorelaneSection />

      {/* 10. Final CTA */}
      <FinalCTASection />
    </>
  )
}
