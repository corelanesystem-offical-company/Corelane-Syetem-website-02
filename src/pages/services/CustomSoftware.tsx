import { getServiceBySlug } from '@/data/services'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function CustomSoftware() {
  const service = getServiceBySlug('custom-software')!
  return <ServiceDetailPage service={service} />
}
