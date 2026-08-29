import { getIndustryBySlug } from '@/data/industries'
import IndustryDetailPage from '@/components/sections/IndustryDetailPage'

export default function Ecommerce() {
  const industry = getIndustryBySlug('ecommerce')!
  return <IndustryDetailPage industry={industry} />
}
