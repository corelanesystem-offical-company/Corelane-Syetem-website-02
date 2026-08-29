import { getIndustryBySlug } from '@/data/industries'
import IndustryDetailPage from '@/components/sections/IndustryDetailPage'

export default function Healthcare() {
  const industry = getIndustryBySlug('healthcare')!
  return <IndustryDetailPage industry={industry} />
}
