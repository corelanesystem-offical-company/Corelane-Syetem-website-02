import { getServiceBySlug } from '@/data/services'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function WebAppDevelopment() {
  const service = getServiceBySlug('web-app-development')!
  return <ServiceDetailPage service={service} />
}
