import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile/credit-request/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/profile/credit-request/"!</div>
}
