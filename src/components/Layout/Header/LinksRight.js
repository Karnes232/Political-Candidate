import React, { useEffect, useState } from "react";
import { Link } from "gatsby";
import useWindowLocation from "../../../hooks/useWindowLocation";
import { auth } from "../../../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const LinksRight = ({ navBarColor }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const path = useWindowLocation();
  let borderColor = "";
  if (navBarColor === "text-white") {
    borderColor = "border-white";
  }
  if (navBarColor === "text-black") {
    borderColor = "border-black";
  }

  const logout = async () => {
    try {
      await signOut(auth);
      window.location.href = `/`;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const currentUser = auth.currentUser;
      if (
        currentUser?.email === "karnes.james@gmail.com" ||
        currentUser?.email === "reyesce.nancy@gmail.com"
      ) {
        setLoggedIn(true);
      }
    });
  }, []);

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
      {loggedIn ? (
        <>
          <button className={`text-sm ${navBarColor}`} onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LinksRight;
