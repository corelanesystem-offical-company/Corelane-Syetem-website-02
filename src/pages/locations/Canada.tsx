import { getLocationBySlug } from '@/data/locations'
import LocationDetailPage from '@/components/sections/LocationDetailPage'

export default function Canada() {
  const location = getLocationBySlug('canada')!
  return <LocationDetailPage location={location} />
}
