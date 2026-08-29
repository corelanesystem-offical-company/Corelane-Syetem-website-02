import { getIndustryBySlug } from '@/data/industries'
import IndustryDetailPage from '@/components/sections/IndustryDetailPage'

export default function LawFirms() {
  const industry = getIndustryBySlug('law-firms')!
  return <IndustryDetailPage industry={industry} />
}
