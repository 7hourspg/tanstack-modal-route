import {createFileRoute, Link, useNavigate} from "@tanstack/react-router";
import Modal from "../_components/modal";

export const Route = createFileRoute("/photos_/$id/modal")({
  component: PhotoModalComponent,
});

function PhotoModalComponent() {
  const navigate = useNavigate();
  const photo = Route.useLoaderData();
  const params = Route.useParams();

  console.log(params);

  return (
    <Modal
      onOpenChange={(open) => {
        if (!open) {
          navigate({
            to: "/photos/$id",
            params: {
              id: params.id,
            },
          });
        }
      }}
    >
      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
        <Link
          to="."
          target="_blank"
          className="text-blue-600 hover:opacity-75 underline"
        >
          Open in new tab (to test de-masking)
        </Link>
      </div>
    </Modal>
  );
}
