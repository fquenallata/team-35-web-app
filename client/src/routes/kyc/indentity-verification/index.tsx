import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kyc/indentity-verification/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/kyc/indentity-verification/"!</div>
}
