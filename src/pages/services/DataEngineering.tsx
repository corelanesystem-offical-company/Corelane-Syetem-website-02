import { getServiceBySlug } from '@/data/services'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function DataEngineering() {
  const service = getServiceBySlug('data-engineering')!
  return <ServiceDetailPage service={service} />
}
