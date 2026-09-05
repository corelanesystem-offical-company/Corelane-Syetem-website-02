import { getCaseStudyBySlug } from '@/data/caseStudies'
import CaseStudyDetailPage from '@/components/sections/CaseStudyDetailPage'

export default function ProfessionalServicesPlatform() {
  const caseStudy = getCaseStudyBySlug('professional-services-operations-platform')!
  return <CaseStudyDetailPage caseStudy={caseStudy} />
}
