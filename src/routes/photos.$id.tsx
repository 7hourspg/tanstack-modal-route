import {createFileRoute, useLoaderData} from "@tanstack/react-router";
import axios from "axios";


// FETCHING DATA
const fetchPhotos = async (id: string) => {
  console.info('Fetching photos...')
  return axios
    .get<Array<any>>(`https://fakestoreapi.in/api/products/${id}`)
    .then((r) => r.data)
}

// ROUTE
export const Route = createFileRoute("/photos/$id")({
  component: RouteComponent,
  loader: ({ params }) => fetchPhotos(params.id),
});

function RouteComponent() {
  const { product } = useLoaderData<any>({ from: '/photos/$id' })
  console.info(product)

  return <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-2xl font-bold">{product.title}</h1>
    <img className="w-1/2 h-1/2 object-contain" src={product.image} alt={product.title} />
    <p>{product.price}</p>
  </div>;
}
