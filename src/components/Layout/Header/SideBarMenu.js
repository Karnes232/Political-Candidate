import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import {
  Sidebar,
  // menuClasses,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import SocialMedia from "../Footer/SocialMedia";
import { auth } from "../../../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
const SideBarMenu = ({ toggled, setToggled, info }) => {
  const [loggedIn, setLoggedIn] = useState(false);
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
        // currentUser?.email === "karnes.james@gmail.com" ||
        // currentUser?.email === "reyesce.nancy@gmail.com"
        currentUser
      ) {
        setLoggedIn(true);
      }
    });
  }, []);
  return (
    <>
      <Sidebar
        backgroundColor="rgb(255, 255, 255, .9)"
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="all"
        rtl
        width="70%"
      >
        <div className="flex flex-col h-full justify-between">
          <div className="mt-16 mb-10">
            <Menu className="ml-0 overflow-hidden">
              <MenuItem component={<Link to="/" className="hamburger" />}>
                <p className="hamburger">Inicio</p>
              </MenuItem>
              <MenuItem
                component={<Link to="/nostros" className="hamburger" />}
              >
                <p className="hamburger">Sobre Nosotros</p>
              </MenuItem>
              <MenuItem
                component={<Link to="/propuestas" className="hamburger" />}
              >
                <p className="hamburger">Propuestas</p>
              </MenuItem>
              <MenuItem
                component={<Link to="/contacto" className="hamburger" />}
              >
                <p className="hamburger">Contacto</p>
              </MenuItem>
              {loggedIn ? (
                <>
                  <MenuItem
                    component={<button onClick={logout}>Logout</button>}
                  >
                    <p className="hamburger">Log Out</p>
                  </MenuItem>
                </>
              ) : (
                <></>
              )}
            </Menu>
          </div>
          <footer className="hamburger mx-4">
            <SocialMedia
              info={info}
              classes="flex-row-reverse"
              iconColor="text-black"
            />
          </footer>
        </div>
      </Sidebar>
    </>
  );
};

export default SideBarMenu;
