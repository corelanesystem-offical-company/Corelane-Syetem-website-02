import { getLocationBySlug } from '@/data/locations'
import LocationDetailPage from '@/components/sections/LocationDetailPage'

export default function Pakistan() {
  const location = getLocationBySlug('pakistan')!
  return <LocationDetailPage location={location} />
}
