import { getCaseStudyBySlug } from '@/data/caseStudies'
import CaseStudyDetailPage from '@/components/sections/CaseStudyDetailPage'

export default function RealEstateCrmPortal() {
  const caseStudy = getCaseStudyBySlug('real-estate-crm-portal')!
  return <CaseStudyDetailPage caseStudy={caseStudy} />
}
