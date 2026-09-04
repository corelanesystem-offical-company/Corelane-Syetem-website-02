import SEO from '@/components/seo/SEO'
import HeroSection from '@/components/sections/HeroSection'
import TrustSection from '@/components/sections/TrustSection'
import ServicesSection from '@/components/sections/ServicesSection'
import BusinessProblemsSection from '@/components/sections/BusinessProblemsSection'
import ProcessSection from '@/components/sections/ProcessSection'
import CloudDevopsSection from '@/components/sections/CloudDevopsSection'
import DataEngineeringSection from '@/components/sections/DataEngineeringSection'
import IndustriesSection from '@/components/sections/IndustriesSection'
import WhyCoreLaneSection from '@/components/sections/WhyCoreLaneSection'
import TechCapabilities from '@/components/sections/TechCapabilities'
import CTASection from '@/components/sections/CTASection'

export default function Home() {
  return (
    <>
      <SEO
        title="Corelane Systems — Enterprise Software & Cloud Engineering"
        description="Corelane Systems builds professional websites, web applications, custom software, and cloud infrastructure for businesses. Practical technology solutions."
        canonical="/"
        ogType="website"
      />

      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <BusinessProblemsSection />
      <ProcessSection />
      <CloudDevopsSection />
      <DataEngineeringSection />
      <IndustriesSection />
      <WhyCoreLaneSection />
      <TechCapabilities />
      <CTASection />
    </>
  )
}
