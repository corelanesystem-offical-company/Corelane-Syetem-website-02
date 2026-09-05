import { getSolutionBySlug } from '@/data/solutions'
import SolutionDetailPage from '@/components/sections/SolutionDetailPage'

export default function CloudSolutions() {
  const solution = getSolutionBySlug('cloud-solutions')!
  return <SolutionDetailPage solution={solution} />
}
