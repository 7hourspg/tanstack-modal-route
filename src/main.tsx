import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createRouteMask,
  createRouter,
} from "@tanstack/react-router";
// Import the generated route tree
import {routeTree} from "./routeTree.gen";

// Create a route mask for the photo modal to photo route
export const photoModalToPhotoMask = createRouteMask({
  routeTree,
  from: "/photos/$id/modal",
  to: "/photos/$id",
  params: true,
});

// Create a new router instance
const router = createRouter({
  routeTree,
  routeMasks: [photoModalToPhotoMask],
  defaultPreload: "intent",
  scrollRestoration: true,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
