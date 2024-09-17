import React from "react";
import { Link } from "gatsby";
import useWindowLocation from "../../../hooks/useWindowLocation";

const LinksRight = () => {
  const path = useWindowLocation();
  return (
    <div className="hidden lg:flex lg:justify-between lg:w-[30rem] xl:w-[35rem]">
      <Link
        to="/"
        className={`no-underline py-1 ${path === "/" ? "border-b" : ""}`}
      >
        <button className={`navLinks`} translate="no">
          Inicio
        </button>
      </Link>
      <Link
        to="/nostros"
        className={`no-underline py-1 ${path === "/nostros/" ? "border-b" : ""}`}
      >
        <button className={`navLinks`} translate="no">
          Sobre Nosotros
        </button>
      </Link>
      <Link
        to="/propuestas"
        className={`no-underline py-1 ${path === "/propuestas/" ? "border-b" : ""}`}
      >
        <button className={`navLinks`} translate="no">
          Propuestas
        </button>
      </Link>
      <Link
        to="/contacto"
        className={`no-underline py-1 ${path === "/contacto/" ? "border-b" : ""}`}
      >
        <button className={`navLinks`} translate="no">
          Contacto
        </button>
      </Link>
    </div>
  );
};

export default LinksRight;
