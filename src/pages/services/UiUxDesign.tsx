import { getServiceBySlug } from '@/data/services'
import ServiceDetailPage from '@/components/sections/ServiceDetailPage'

export default function UiUxDesign() {
  const service = getServiceBySlug('ui-ux-design')!
  return <ServiceDetailPage service={service} />
}
