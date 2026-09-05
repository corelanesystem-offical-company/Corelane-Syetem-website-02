import { getSolutionBySlug } from '@/data/solutions'
import SolutionDetailPage from '@/components/sections/SolutionDetailPage'

export default function BusinessAutomationSolution() {
  const solution = getSolutionBySlug('business-automation')!
  return <SolutionDetailPage solution={solution} />
}
