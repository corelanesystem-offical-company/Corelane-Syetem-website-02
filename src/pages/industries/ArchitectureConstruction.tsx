import { getIndustryBySlug } from '@/data/industries'
import IndustryDetailPage from '@/components/sections/IndustryDetailPage'

export default function ArchitectureConstruction() {
  const industry = getIndustryBySlug('architecture-construction')!
  return <IndustryDetailPage industry={industry} />
}
