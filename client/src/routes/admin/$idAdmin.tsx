import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/admin/$idAdmin")({
  component: () => <div>Hello "/admin/$idAdmin"!</div>,
});
