import { getLocationBySlug } from '@/data/locations'
import LocationDetailPage from '@/components/sections/LocationDetailPage'

export default function UK() {
  const location = getLocationBySlug('uk')!
  return <LocationDetailPage location={location} />
}
