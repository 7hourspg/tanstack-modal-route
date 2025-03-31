import { createFileRoute, Link, useLoaderData } from "@tanstack/react-router";
import axios from "axios";

// FETCHING DATA
const fetchPhotos = async () => {
  console.info('Fetching photos...')
  await new Promise((r) => setTimeout(r, 500))
  return axios
    .get<Array<any>>('https://fakestoreapi.in/api/products?limit=10')
    .then((r) => r.data)
}

// ROUTE
export const Route = createFileRoute("/photos/")({
  component: RouteComponent,
  loader: fetchPhotos,
});

// COMPONENT
function RouteComponent() {
  const { products } = useLoaderData<any>({ from: "/photos/" })

  return <div>
    <h1>Products: {products.length}</h1>
    <div className="grid grid-cols-4 gap-4">
      {products.map((product: any) => (
        <Link to="/photos/$id/modal"
          mask={{
            to: '/photos/$id/modal',
            params: {
              id: product.id,
            },
          }}
          params={{ id: product.id }} key={product.id}>
          <div className="border border-gray-300 rounded-md p-4">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>;
}



