import {
  createFileRoute,
  Link,
  useLoaderData,
  useNavigate,
} from "@tanstack/react-router";
import Modal from "../_components/modal";
import axios from "axios";

// FETCHING DATA
const fetchPhotos = async (id: string) => {
  console.info("Fetching photos...");
  await new Promise((r) => setTimeout(r, 500));
  return axios
    .get<Array<any>>(`https://fakestoreapi.in/api/products/${id}`)
    .then((r) => r.data);
};

// ROUTE
export const Route = createFileRoute("/photos_/$id/modal")({
  component: PhotoModalComponent,
  loader: ({params}) => fetchPhotos(params.id),
});

function PhotoModalComponent() {
  const navigate = useNavigate();
  const {product} = useLoaderData<any>({from: "/photos_/$id/modal"});

  return (
    <Modal
      onOpenChange={(open) => {
        if (!open) {
          navigate({
            to: "/photos",
            params: {
              id: product.id,
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
      <div>
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.price}</p>
      </div>
    </Modal>
  );
}
