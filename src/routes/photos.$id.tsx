import {createFileRoute} from "@tanstack/react-router";

export const Route = createFileRoute("/photos/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello child "/photos/$id"!</div>;
}
