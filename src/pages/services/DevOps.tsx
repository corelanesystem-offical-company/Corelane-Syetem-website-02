import { getServiceBySlug } from '@/data/services'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function DevOps() {
  const service = getServiceBySlug('devops')!
  return <ServiceDetailPage service={service} />
}
