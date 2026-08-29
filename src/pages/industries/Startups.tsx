import { getIndustryBySlug } from '@/data/industries'
import IndustryDetailPage from '@/components/sections/IndustryDetailPage'

export default function Startups() {
  const industry = getIndustryBySlug('startups')!
  return <IndustryDetailPage industry={industry} />
}
