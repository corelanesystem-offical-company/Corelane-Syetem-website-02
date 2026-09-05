import { getCaseStudyBySlug } from '@/data/caseStudies'
import CaseStudyDetailPage from '@/components/sections/CaseStudyDetailPage'

export default function SaasCloudMigration() {
  const caseStudy = getCaseStudyBySlug('saas-cloud-infrastructure-migration')!
  return <CaseStudyDetailPage caseStudy={caseStudy} />
}
