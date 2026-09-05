import { getSolutionBySlug } from '@/data/solutions'
import SolutionDetailPage from '@/components/sections/SolutionDetailPage'

export default function CustomBusinessSystems() {
  const solution = getSolutionBySlug('custom-business-systems')!
  return <SolutionDetailPage solution={solution} />
}
