import { getSolutionBySlug } from '@/data/solutions'
import SolutionDetailPage from '@/components/sections/SolutionDetailPage'

export default function DataSolutions() {
  const solution = getSolutionBySlug('data-solutions')!
  return <SolutionDetailPage solution={solution} />
}
