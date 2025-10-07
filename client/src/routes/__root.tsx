import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <h1>Routes</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li></li>
      </ul>
      <Outlet />,
    </>
  ),
});
