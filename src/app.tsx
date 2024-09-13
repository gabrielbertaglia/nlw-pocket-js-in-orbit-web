import { useQuery } from '@tanstack/react-query'
import { CreateGoal } from './components/create-goal'
import { EmptyGoals } from './components/empty-goals'
import { Summary } from './components/summary'
import { Dialog } from './components/ui/dialog'
import { getSummary } from './http/get-summary'

export function App() {
  const { data: summary } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 1 minute
  })

  return (
    <Dialog>
      {summary && summary?.total > 0 ? <Summary /> : <EmptyGoals />}

      <CreateGoal />
    </Dialog>
  )
}
