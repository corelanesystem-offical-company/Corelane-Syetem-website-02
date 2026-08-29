import { getIndustryBySlug } from '@/data/industries'
import IndustryDetailPage from '@/components/sections/IndustryDetailPage'

export default function Smes() {
  const industry = getIndustryBySlug('smes')!
  return <IndustryDetailPage industry={industry} />
}
