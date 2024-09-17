import { Link } from "gatsby";
import React from "react";
import {
  Sidebar,
  // menuClasses,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
const SideBarMenu = ({ toggled, setToggled }) => {
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
              <MenuItem component={<Link to="/" className="hamburger" />}>
                <p className="hamburger">Sobre Nosotros</p>
              </MenuItem>
              <MenuItem component={<Link to="/" className="hamburger" />}>
                <p className="hamburger">Propuestas</p>
              </MenuItem>
              <MenuItem component={<Link to="/" className="hamburger" />}>
                <p className="hamburger">Contacto</p>
              </MenuItem>
            </Menu>
          </div>
          {/* <footer className="hamburger mx-4">
            <SocialMedia classes="flex-row-reverse" />
          </footer> */}
        </div>
      </Sidebar>
    </>
  );
};

export default SideBarMenu;
