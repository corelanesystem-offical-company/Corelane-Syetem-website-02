import { getLocationBySlug } from '@/data/locations'
import LocationDetailPage from '@/components/sections/LocationDetailPage'

export default function UAE() {
  const location = getLocationBySlug('uae')!
  return <LocationDetailPage location={location} />
}
