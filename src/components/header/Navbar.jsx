import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ className }) {
  const [page, setPage] = useState("home");

  const location = useLocation();

  useEffect(() => {
    setPage(location.pathname.replace("/", ""));
  }, [location.pathname]);

  return (
    <ul
      className={`flex flex-wrap ${className} absolute top-full rounded-r-none lg:rounded-full left-0 w-full lg:static lg:w-auto bg-blue-950 items-center justify-center text-white transition-all duration-500 lowercase hover:pb-2`}
    >
      <li
        className={`${
          page === "" && "bg-blue-700"
        } transition-colors duration-500 rounded-l-full`}
      >
        <Link to="/">
          <img
            alt="homeImg"
            src="/src/assets/home.svg"
            className="py-4 px-4 hover:-translate-y-1 transition-all ease-in-out"
          />
        </Link>
      </li>
      <li
        className={`${
          page === "fitness" && "bg-blue-700"
        } transition-colors duration-500`}
      >
        <Link to="/fitness">
          <p className="py-6 px-5 hover:-translate-y-1 transition-all ease-in-out">
            Fitness
          </p>
        </Link>
      </li>
      <li
        className={`${
          page === "finanzas" && "bg-blue-700"
        } transition-colors duration-500`}
      >
        <Link to="/finanzas">
          <p className="py-6 px-5 hover:-translate-y-1 transition-all ease-in-out">
            Finanzas
          </p>
        </Link>
      </li>
      <li className={`${page === "filosofia" && "bg-blue-700"} transition-all`}>
        <Link to="/filosofia">
          <p className="py-6 px-5 hover:-translate-y-1 transition-all ease-in-out">
            Filosofía
          </p>
        </Link>
      </li>
      <li
        className={`${
          page === "configuracion" && "bg-blue-700"
        } transition-colors duration-500 rounded-r-full`}
      >
        <Link to="/configuracion">
          <p className="py-4 px-5 hover:-translate-y-1 transition-all ease-in-out">
            <img
              className="hover:rotate-90 transition-all"
              src="/src/assets/configuracion.svg"
              alt="Configuración"
            />
          </p>
        </Link>
      </li>
    </ul>
  );
}
