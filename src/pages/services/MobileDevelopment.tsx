import { getServiceBySlug } from '@/data/services'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function MobileDevelopment() {
  const service = getServiceBySlug('mobile-development')!
  return <ServiceDetailPage service={service} />
}
