import React from "react";
import Logo from "./Logo";
import LinksRight from "./LinksRight";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = ({ logo, info, navBarColor }) => {
  return (
    <nav className="bg-transparent pt-5 w-screen z-50 h-24 md:h-36 fixed top-0">
      <div className="flex items-center justify-between bg-transparent max-w-6xl mx-5 md:mx-10 lg:mx-8 xl:mx-auto">
        <Logo logo={logo} />
        <LinksRight navBarColor={navBarColor} />
        <HamburgerMenu info={info} navBarColor={navBarColor} />
      </div>
    </nav>
  );
};

export default Navbar;
