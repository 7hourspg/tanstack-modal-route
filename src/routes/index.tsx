import {createRoute} from "@tanstack/react-router";
import {rootRoute} from "./__root";

// ROUTE
export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Index,
});

// COMPONENT
function Index() {
  return (
    <div className="p-2 bg-green-500">
      <h3>Welcome Home!</h3>
    </div>
  );
}
