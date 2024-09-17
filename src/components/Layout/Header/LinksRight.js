import React from "react";
import { Link } from "gatsby";
import useWindowLocation from "../../../hooks/useWindowLocation";

const LinksRight = ({ navBarColor }) => {
  const path = useWindowLocation();
  let borderColor = "";
  if (navBarColor === "text-white") {
    borderColor = "border-white";
  }
  if (navBarColor === "text-black") {
    borderColor = "border-black";
  }

  return (
    <div className="hidden lg:flex lg:justify-between lg:w-[30rem] xl:w-[35rem]">
      <Link
        to="/"
        className={`no-underline py-1 ${path === "/" ? `border-b ${borderColor}` : ""}`}
      >
        <button className={`navLinks ${navBarColor}`} translate="no">
          Inicio
        </button>
      </Link>
      <Link
        to="/nostros"
        className={`no-underline py-1 ${path === "/nostros/" ? `border-b ${borderColor}` : ""}`}
      >
        <button className={`navLinks ${navBarColor}`} translate="no">
          Sobre Nosotros
        </button>
      </Link>
      <Link
        to="/propuestas"
        className={`no-underline py-1 ${path === "/propuestas/" ? `border-b ${borderColor}` : ""}`}
      >
        <button className={`navLinks ${navBarColor}`} translate="no">
          Propuestas
        </button>
      </Link>
      <Link
        to="/contacto"
        className={`no-underline py-1 ${path === "/contacto/" ? `border-b ${borderColor}` : ""}`}
      >
        <button className={`navLinks ${navBarColor}`} translate="no">
          Contacto
        </button>
      </Link>
    </div>
  );
};

export default LinksRight;
