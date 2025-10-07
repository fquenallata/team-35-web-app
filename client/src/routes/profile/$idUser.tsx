import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/profile/$idUser")({
  component: () => <div>Hello "/profile"!</div>,
});
