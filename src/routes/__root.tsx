import {createRootRoute, Outlet} from "@tanstack/react-router";
import Navbar from "../_components/navbar";

type PhotoModal = {
  id: "photo";
  photoId: string;
};

type ModalObject = PhotoModal;

export const rootRoute = createRootRoute({
  validateSearch: (search) =>
    search as {
      modal?: ModalObject;
    },
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
