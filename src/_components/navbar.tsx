import {Link, useLocation} from "@tanstack/react-router";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="p-2 h-16 flex justify-center items-center">
      <div className="flex gap-6 underline">
        <Link
          to="/"
          className={location.pathname === "/" ? "font-bold text-blue-500" : ""}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={
            location.pathname === "/about" ? "font-bold text-blue-500" : ""
          }
        >
          About
        </Link>
        <Link
          to="/photos"
          className={
            location.pathname.startsWith("/photos")
              ? "font-bold text-blue-500"
              : ""
          }
        >
          Photos
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
