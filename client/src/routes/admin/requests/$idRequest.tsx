import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/requests/$idRequest')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/requests/$idRequest"!</div>
}
