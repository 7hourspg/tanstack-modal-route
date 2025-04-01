import {createRoute, Link} from "@tanstack/react-router";
import axios from "axios";
import {rootRoute} from "./__root";
import {photoModalRoute} from "./photos-modal";

// FETCHING DATA
const fetchPhotos = async () => {
  console.info("Fetching photos...");
  return axios
    .get<Array<any>>("https://fakestoreapi.in/api/products?limit=10")
    .then((r) => r.data);
};

// ROUTE
export const photosRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "photos",
  component: RouteComponent,
  loader: fetchPhotos,
  preload: true,
  errorComponent: () => <div>Error</div>,
  pendingComponent: () => <div>Loading...</div>,
});

// COMPONENT
function RouteComponent() {
  const {products} = photosRoute.useLoaderData<any>();

  return (
    <div>
      <h1>Products: {products.length}</h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product: any) => (
          <Link
            to={photoModalRoute.to}
            key={product.id}
            params={{id: product.id}}
          >
            <div className="border border-gray-300 rounded-md p-4">
              <img src={product.image} alt={product.title} />
              <h2>{product.title}</h2>
              <p>{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
