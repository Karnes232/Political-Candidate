import React from "react";
import { Link } from "gatsby";
const LinksRight = () => {
  return (
    <div className="hidden lg:flex lg:justify-between lg:w-[30rem] xl:w-[35rem]">
      <Link to="/" className="no-underline">
        <button className={`navLinks`} translate="no">
          Inicio
        </button>
      </Link>
      <Link to="/" className="no-underline">
        <button className={`navLinks`} translate="no">
          Sobre Nosotros
        </button>
      </Link>
      <Link to="/" className="no-underline">
        <button className={`navLinks`} translate="no">
          Propuestas
        </button>
      </Link>
      <Link to="/" className="no-underline">
        <button className={`navLinks`} translate="no">
          Contacto
        </button>
      </Link>
    </div>
  );
};

export default LinksRight;
