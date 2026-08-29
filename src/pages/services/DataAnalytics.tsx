import { getServiceBySlug } from '@/data/services'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function DataAnalytics() {
  const service = getServiceBySlug('data-analytics')!
  return <ServiceDetailPage service={service} />
}
