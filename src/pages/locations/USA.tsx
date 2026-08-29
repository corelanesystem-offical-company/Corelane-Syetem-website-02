import { getLocationBySlug } from '@/data/locations'
import LocationDetailPage from '@/components/sections/LocationDetailPage'

export default function USA() {
  const location = getLocationBySlug('usa')!
  return <LocationDetailPage location={location} />
}
