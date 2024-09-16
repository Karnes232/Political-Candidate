import React from 'react'
import { Link } from "gatsby";
const LinksRight = () => {
  return (
    <div className="hidden lg:flex lg:justify-between lg:w-[45vw]">
        <Link to="/" className="no-underline">
        <button className={`navLinks text-primary-color`} translate="no">
        Inicio
        </button>
      </Link>
      <Link to="/" className="no-underline">
        <button className={`navLinks text-primary-color`} translate="no">
        Sobre Nosotros
        </button>
      </Link>
      <Link to="/" className="no-underline">
        <button className={`navLinks text-primary-color`} translate="no">
        Propuestas
        </button>
      </Link>
      <Link to="/" className="no-underline">
        <button className={`navLinks text-primary-color`} translate="no">
        Contacto
        </button>
      </Link>
    </div>
  )
}

export default LinksRight