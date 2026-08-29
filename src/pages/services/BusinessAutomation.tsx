import { getServiceBySlug } from '@/data/services'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function BusinessAutomation() {
  const service = getServiceBySlug('business-automation')!
  return <ServiceDetailPage service={service} />
}
