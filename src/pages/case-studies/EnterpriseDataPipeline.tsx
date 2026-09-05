import { getCaseStudyBySlug } from '@/data/caseStudies'
import CaseStudyDetailPage from '@/components/sections/CaseStudyDetailPage'

export default function EnterpriseDataPipeline() {
  const caseStudy = getCaseStudyBySlug('enterprise-data-pipeline')!
  return <CaseStudyDetailPage caseStudy={caseStudy} />
}
