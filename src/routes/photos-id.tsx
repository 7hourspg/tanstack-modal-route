import {createRoute} from "@tanstack/react-router";
import axios from "axios";
import {rootRoute} from "./__root";
// FETCHING DATA
const fetchPhotos = async (id: string) => {
  console.info("Fetching photos...");
  return axios
    .get<Array<any>>(`https://fakestoreapi.in/api/products/${id}`)
    .then((r) => r.data);
};

// ROUTE
export const photoChildRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "photos/$id",
  component: RouteComponent,
  loader: async ({params: {id}}) => fetchPhotos(id),
  errorComponent: () => <div>Error</div>,
  pendingComponent: () => <div>Loading...</div>,
});

function RouteComponent() {
  const {product} = photoChildRoute.useLoaderData<any>();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <img
        className="w-1/2 h-1/2 object-contain"
        src={product.image}
        alt={product.title}
      />
      <p>{product.price}</p>
    </div>
  );
}
