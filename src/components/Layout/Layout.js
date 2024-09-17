import React from "react";
import Navbar from "./Header/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children, layout, navBarColor }) => {
  const info = {
    candidateName: layout.candidateName,
    email: layout.email,
    facebook: layout.facebook,
    instagram: layout.instagram,
  };
  return (
    <div className="min-h-screen font-montserrat flex flex-col justify-between bg-primary-bg-color">
      <Navbar logo={layout.logo} info={info} navBarColor={navBarColor} />
      {children}
      <Footer info={info} />
    </div>
  );
};

export default Layout;
