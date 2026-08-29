import { getIndustryBySlug } from '@/data/industries'
import IndustryDetailPage from '@/components/sections/IndustryDetailPage'

export default function ProfessionalServices() {
  const industry = getIndustryBySlug('professional-services')!
  return <IndustryDetailPage industry={industry} />
}
