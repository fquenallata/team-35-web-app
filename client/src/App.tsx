import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import "./styles/App.scss";

const router = createRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}
//----------------------------------------
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
export default App;
