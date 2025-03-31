import {createRootRoute, Outlet} from "@tanstack/react-router";
import Navbar from "../_components/navbar";

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
    </>
  ),
});
