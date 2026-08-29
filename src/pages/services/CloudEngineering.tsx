import { getServiceBySlug } from '@/data/services'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function CloudEngineering() {
  const service = getServiceBySlug('cloud-engineering')!
  return <ServiceDetailPage service={service} />
}
