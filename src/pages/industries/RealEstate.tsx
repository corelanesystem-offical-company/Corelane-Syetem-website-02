import { getIndustryBySlug } from '@/data/industries'
import IndustryDetailPage from '@/components/sections/IndustryDetailPage'

export default function RealEstate() {
  const industry = getIndustryBySlug('real-estate')!
  return <IndustryDetailPage industry={industry} />
}
