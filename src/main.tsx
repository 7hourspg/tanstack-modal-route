import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createRouteMask,
  // createRouteMask,
  createRouter,
} from "@tanstack/react-router";

// ROUTES
import {rootRoute} from "./routes/__root";
import {indexRoute} from "./routes/index";
import {aboutRoute} from "./routes/about";
// PHOTOS ROUTES
import {photosRoute} from "./routes/photos";
import {photoChildRoute} from "./routes/photos-id";
import {photoModalRoute} from "./routes/photos-modal";

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  photoChildRoute,
  photosRoute.addChildren([photoModalRoute]),
]);

// Create a route mask for the photo modal to photo route
const photoModalToPhotoMask = createRouteMask({
  routeTree,
  from: "/photos/$id/modal",
  to: "/photos/$id",
  params: true,
});

// Set up a Router instance
const router = createRouter({
  routeTree,
  routeMasks: [photoModalToPhotoMask],
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
