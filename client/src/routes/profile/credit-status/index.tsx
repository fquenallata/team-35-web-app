import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/credit-status/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/profile/credit-status/"!</div>
}
