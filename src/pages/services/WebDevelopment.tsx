import { getServiceBySlug } from '@/data/services'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function WebDevelopment() {
  const service = getServiceBySlug('web-development')!
  return <ServiceDetailPage service={service} />
}
